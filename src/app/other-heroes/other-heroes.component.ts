import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero.class';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-other-heroes',
  templateUrl: './other-heroes.component.html',
  styleUrls: ['./other-heroes.component.css']
})
export class OtherHeroesComponent implements OnInit {
  heroes: Array<Hero>;
  selectedHero: Hero;
  constructor(
    private heroService: HeroService,

  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(
        (heroes: Array<Hero>) => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe((hero: Hero) => {
        console.log(hero);
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
    this.selectedHero = undefined;
  }


}