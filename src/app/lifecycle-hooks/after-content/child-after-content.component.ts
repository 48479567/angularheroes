import { Component } from '@angular/core';
import { Hero } from '../../../classes/hero.class';

@Component({
  selector: 'lch-child-after-content',
  template: `
    <br/>
    <mat-form-field>
      <input 
        matInput
        placeholder="Hero Name"
        [(ngModel)]="hero.name" />
    </mat-form-field>
    <br/>
  `
})
export class ChildAfterContentComponent { 
  hero: Hero;

  constructor() {
    this.hero = new Hero(1, 'ChildHero', 'sad');
  }

}