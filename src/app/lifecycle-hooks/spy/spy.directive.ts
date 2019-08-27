import { Directive, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from '../../../services/logger.service';

let nextId = 0;
@Directive({
  selector: '[spy]' 
})
export class SpyDirective implements OnInit, OnDestroy {
  nextId: number = 0;
  constructor(
    private logggerService: LoggerService
  ){ }

  ngOnInit(): void {
    this.logIt('Initialized', 'log');
  }
  ngOnDestroy(): void {
    this.logIt('Destroyed', 'warn');
  }

  logIt(message: string, type: string): void {
    console[type](`Spy #${++nextId}, ${message}`);
  }
}