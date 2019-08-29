import { Component } from '@angular/core';
import { Hero } from '../../../classes/hero.class';
import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'app-parent-after-content',
  template: `
      <br/>
      <h3>AfterContent</h3>
      <div *ngIf="show">
        <app-after-content>
          <app-child-after-content></app-child-after-content>
        </app-after-content>
      </div>

  `
})
export class ParentAfterContentComponent {
  hero: Hero;
  power: string;
  show: boolean;

  constructor(
    private logger: LoggerService
  ) {
    this.hero = new Hero(0, 'Zero', '');
    this.power = '';
    this.show = true;
  }

}
