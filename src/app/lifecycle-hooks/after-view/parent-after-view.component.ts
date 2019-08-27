import { Component, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';
import { AfterViewComponent } from './after-view.component';
import { Hero } from '../../../classes/hero.class';

import { MessageService } from '../../../services/message.service';
import { LoggerService } from '../../../services/logger.service';


@Component({
  selector: 'lch-parent-after-view',
  template: `
      <br/>
      <h3>AfterView</h3> 
      <lch-after-view></lch-after-view>
  `
})
export class ParentAfterViewComponent implements AfterViewInit, AfterViewChecked {
  private hero: Hero;
  private nameLifeCicleHooks: string;

  @ViewChild(AfterViewComponent, { static: false }) viewChild: AfterViewComponent;

  constructor(
    private messageService: MessageService,
    private logger: LoggerService

  ) {
    this.hero = new Hero(0, 'Zero', '');
  }

  ngOnInit(): void {
    this.logger.setNameLog('After View');
  }

  ngAfterViewInit(): void {
    this.logger.log('AfterViewInit')
    this.doSomething();
  }

  ngAfterViewChecked(): void {
    if (this.hero.name === this.viewChild.hero.name) {
      this.logger.log('AfterViewChecked (no change)');
    } else {
      this.hero.name = this.viewChild.hero.name;
      this.logger.log('AfterViewChecked');
      this.doSomething();
    }
  }

  private doSomething(): void {
    let c = this.viewChild.hero.name.length > 10 ? `That's a log name`: '';
    setTimeout(() => this.viewChild.comment = c, 0);
  }

}