import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  fontSizePx: number;
  today: number;
  num1: number;
  num2: number;
  isUnchanged: boolean;
  valueTag: string;
  

  constructor(

  ) {
    this.fontSizePx = 16;
    this.today = Date.now();
    this.num1 = 2;
    this.num2 = 6;
    this.isUnchanged = false;
    this.valueTag = '<button>Insert</button>';
  }

  getAverage(externalNumber: string): number {
    return (+this.num1 + +this.num2 + +externalNumber) / 3;
  }

  change(): void {
    this.isUnchanged = !this.isUnchanged;
  }

}