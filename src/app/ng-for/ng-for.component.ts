import { 
  Component, 
  OnInit, 
  AfterViewInit, 
  ViewChildren, 
  QueryList, 
  ElementRef 
} from '@angular/core';

import { Hero } from '../../classes/hero.class';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit, AfterViewInit {
  heroes: Array<Hero>;

  heroesNoTrackByCount: number;
  heroesWithTrackByCount: number;
  heroesWithTrackByCountReset: number;

  @ViewChildren('noTrackBy') heroesNoTrackBy: QueryList<ElementRef>;
  @ViewChildren('withTrackBy') heroesWithTrackBy: QueryList<ElementRef>;

  heroIdIncrement: number;


  constructor(
    private heroService: HeroService
  ) { 
    this.heroesNoTrackByCount = 0;
    this.heroesWithTrackByCount = 0;
    this.heroesWithTrackByCountReset = 0;

    this.heroIdIncrement = 1;
  }
  
  ngOnInit(): void {
    this.resetHeroes();
  }

  changeIds(): void {
    this.heroes.forEach(h => h.id += 10 * this.heroIdIncrement++);
    this.heroesWithTrackByCountReset = -1;
  }

  changeNames(): void {
    this.resetHeroes();
    this.heroes.forEach(h => h.name = `Other Hero ${h.id + 2}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes: Array<Hero>) => this.heroes = heroes);
  }

  resetHeroes(): void {
    this.heroes = Hero.heroes.map((h: Hero) => h.clone());
    this.heroesWithTrackByCountReset = 0;
  }

  clearTrackByCounts(): void {
    const trackByCountReset = this.heroesWithTrackByCountReset;
    this.resetHeroes();
    this.heroesNoTrackByCount = -1;
    this.heroesWithTrackByCount = trackByCountReset;
    this.heroIdIncrement = 1;
  }

  trackByHeroes(index: number, hero: Hero): number { 
    return hero.id; 
  }
 
  ngAfterViewInit(): void {
    // Detect effects of NgForTrackBy
    this.trackChanges(this.heroesNoTrackBy, () => this.heroesNoTrackByCount++);
    this.trackChanges(this.heroesWithTrackBy, () => this.heroesWithTrackByCount++);
  }

  trackChanges(views: QueryList<ElementRef>, changed: () => void): void {
    let oldRefs = views.toArray();
    views.changes.subscribe((changes: QueryList<ElementRef>) => {   
      const changedRefs = changes.toArray();
      const isSame = oldRefs.every((v, i) => v.nativeElement === changedRefs[i].nativeElement);
      if (!isSame) {
        oldRefs = changedRefs;
        setTimeout(changed, 0);
      }
  });
}

}