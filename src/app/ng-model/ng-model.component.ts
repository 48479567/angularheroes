import { Component, Input } from '@angular/core';
import { Hero } from '../../classes/hero.class'

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent {
  @Input() currentHero: Hero;

  constructor(

  ) {
  }
  private updateCurrentHeroName(inputCurrentHero: Event): void {
    this.currentHero.name = (inputCurrentHero.target as any).value;
  }
  private setUppercaseName(currentHeroName: string): void {
    this.currentHero.name = currentHeroName.toUpperCase();
  }
}