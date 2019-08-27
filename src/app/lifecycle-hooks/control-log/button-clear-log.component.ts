import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lch-button-clear-log',
  template: `
    <button 
      mat-raised-button
      (click)="clearLog()"
    >Clear Log</button>
  `
})
export class ButtonClearComponent {
  @Output() clearChange = new EventEmitter<void>();
  clearLog(): void {
    this.clearChange.emit();
  }

}