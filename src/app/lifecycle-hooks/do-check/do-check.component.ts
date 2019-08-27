import {
  Component,
  OnInit,
  DoCheck,
  OnChanges,
  Input,
  SimpleChanges } from '@angular/core';
import { Hero } from '../../../classes/hero.class';

import { MessageService } from '../../../services/message.service';
import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'lch-do-check',
  template: `
    <br/>
  `
})
export class DoCheckComponent implements OnInit, DoCheck, OnChanges {
  @Input() hero: Hero;
  @Input() power: string;

  oldPower: string;
  oldHeroName: string;

  constructor(
    private messageService: MessageService,
    private logger: LoggerService

  ) {
    this.oldPower = '';
    this.oldHeroName = '';
  }

  ngOnInit(): void {
    this.logger.setNameLog('Do Check');
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.logger.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`)
    }
  }

  ngDoCheck(): void {

    if (this.hero.name !== this.oldHeroName) {
      this.logger.log(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`);
      this.oldHeroName = this.hero.name;
    }

    if (this.power !== this.oldPower) {
      this.logger.log(`DoCheck: Power changed to "${this.power}" from "${this.oldPower}"`);
      this.oldPower = this.power;
    }

  }

}