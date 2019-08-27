import { Component, Input } from '@angular/core';
import { Hero } from '../../classes/hero.class';

@Component({
  selector: 'app-select-favorite-hero',
  templateUrl: './select-favorite-hero.component.html'
})
export class SelectFavoriteHero { 
  @Input() heroes: Array<Hero>;
  showSad: true;
  hero: Hero = new Hero();
}