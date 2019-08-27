import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../classes/hero.class';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  heroes: Array<Hero>;
  currentHero: Hero;
  heroNull = null;

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(
      (heroes: Array<Hero>) => {
        this.heroes = heroes;
        this.currentHero = this.heroes[0];
      }
    );
  }
}

@Component({
  selector: 'app-happy-hero',
  template: `Wow. You like {{hero.name}}. What a happy hero ... just like you.`
})
class HappyHeroComponent {
  @Input() hero: Hero;
}

@Component({
  selector: 'app-sad-hero',
  template: `You like {{hero.name}}? Such a sad hero. Are you sad too?`
})
class SadHeroComponent {
  @Input() hero: Hero;
}

@Component({
  selector: 'app-confused-hero',
  template: `Are you as confused as {{hero.name}}?`
})
class ConfusedHeroComponent {
  @Input() hero: Hero;
}

@Component({
  selector: 'app-unknown-hero',
  template: `{{message}}`
})
class UnknownHeroComponent {
  @Input() hero: Hero;
  get message() {
    return this.hero && this.hero.name ?
      `${this.hero.name} is strange and mysterious.` :
      'Are you feeling indecisive?';
  }
}

export const NgSwitchComponents = [
  HappyHeroComponent,
  SadHeroComponent,
  ConfusedHeroComponent,
  UnknownHeroComponent,

];