import { Component, Input } from '@angular/core';
import { Hero } from '../../../classes/hero.class';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-after-view',
  template: `
    <br/>
    <h4 mat-subheader>{{this.comment}}</h4>
    <br/>
    <mat-form-field>
      <input
        matInput
        placeholder="Hero Name"
        [(ngModel)]="hero.name"/>
    </mat-form-field>

  `
})
export class AfterViewComponent {
  hero: Hero;
  comment: string;

  constructor(
    private messageService: MessageService
  ) {
    this.hero = new Hero(100, 'Hundred', 'so-so');
    this.comment = '';
  }

}
