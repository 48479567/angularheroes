import {
  Component,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  ContentChild
} from '@angular/core';
import { ChildAfterContentComponent } from './child-after-content.component';
import { Hero } from '../../../classes/hero.class';
import { MessageService } from '../../../services/message.service';
import { LoggerService } from '../../../services/logger.service';


@Component({
  selector: 'lch-after-content',
  template: `
    <br/>
    _____After Content____
    <br/>
    <ng-content></ng-content>
  `
})
export class AfterContentComponent implements
  OnInit, AfterContentInit, AfterContentChecked {

  private prevHero: string;
  comment: string;

  @ContentChild(ChildAfterContentComponent, { static: false }) contentChild: ChildAfterContentComponent;

  constructor(
    private messageService: MessageService,
    private logger: LoggerService

  ) {
    this.prevHero = '';
    this.comment = '';
    this.logIt('AfterContent constructor');
  }

  ngOnInit(): void {
    this.logger.setNameLog('After Content');
  }

  ngAfterContentInit(): void {
    this.messageService.add('AfterContentInit');
    this.logIt('AfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked(): void {
    if (this.prevHero === this.contentChild.hero.name) {
      this.logger.log('AfterContentChecked (no Change)');
    } else {
      this.prevHero = this.contentChild.hero.name;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
  }

  private doSomething(): void {
    this.comment = this.contentChild.hero.name.length > 10 ? `That's a long name` : '';
  }

  private logIt(method: string) {
    const child = this.contentChild;
    const message = `${method}: ${child ? child.hero.name : 'no'} child content`;
    this.logger.log(message);
  }

}
