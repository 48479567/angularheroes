import { Component } from '@angular/core';
import { Hero } from '../../../classes/hero.class';

@Component({
  selector: 'lch-parent-do-check',
  template: `
      <br/>
      <h3 mat-subtitle>DoCheck</h3> 
      <br/>
      <mat-form-field>
        <input 
          matInput
          placeholder="Hero Name"
          [(ngModel)]="hero.name" />
      </mat-form-field>
      <mat-form-field>
        <input 
            matInput
            placeholder="Power"
            [(ngModel)]="power" />
      </mat-form-field>
      <br/>
      <lch-do-check
        [hero]="hero"
        [power]="power">
      </lch-do-check>
  `
})
export class ParentDoCheckComponent {
  hero: Hero;
  power: string;

  constructor() {
    this.hero = new Hero(0, 'Zero', '');
    this.power = '';
  }


}