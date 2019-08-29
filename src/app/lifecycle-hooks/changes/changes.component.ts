import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Hero } from '../../../classes/hero.class';
import { MessageService } from '../../../services/message.service';
import { LoggerService } from '../../../services/logger.service';


@Component({
  selector: 'app-changes',
  template: `
    ____NgOnChanges____
  `
})
export class ChangesComponent implements OnChanges, OnInit {
  @Input() hero: Hero;
  @Input() power: string;
  nameLifeCicleHooks: string;

  changeLog: Array<string>;
  constructor(
    private messageService: MessageService,
    private logger: LoggerService
  ) { }

  ngOnInit(): void {
    this.logger.setNameLog('Changes');
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.logger.log(`${propName}: currentValue =${cur}, previousValue = ${prev}`);
    }
  }
}

