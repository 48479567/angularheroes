import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'lch-view-log',
  template: `
    <br/>
    <mat-divider></mat-divider>
    <mat-list>
      <h3 mat-subheader>-- {{ logger.nameLog }} Log --</h3>
      <mat-list-item *ngFor="let log of logger.logs">
        <mat-icon mat-list-icon>security</mat-icon>
        <p mat-line>{{ log }}</p>
      </mat-list-item>
    </mat-list>

    
    <br/>
    <lch-button-clear-log
      (clearChange)="clearLog()">
    </lch-button-clear-log>
  `
})
export class ViewLogComponent implements OnInit {
  constructor(
    public logger: LoggerService
  ) { }

  ngOnInit(): void {
  }

  clearLog(): void {
    this.logger.clear();
  }

}