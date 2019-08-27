import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logs: Array<string>;
  prevMsg: string;
  prevMsgCount: number;
  nameLog: string;

  constructor(

  ) { 
    this.logs = [];
    this.prevMsg = '';
    this.prevMsgCount = 1;
    this.nameLog = '';
  }

  log(msg: string): void {
    if (msg === this.prevMsg) {
      this.logs[this.logs.length - 1] = `
        ${msg} (${this.prevMsgCount += 1}x)`;
    } else {
      this.prevMsg = msg;
      this.prevMsgCount = 1;
      this.logs.push(msg);
    }
  }

  clear() { this.logs = []; }

  tick() { this.tick_then(() => { }); }
  tick_then(fn: () => any) { setTimeout(fn, 0); }

  setNameLog(nameControl: string): void {
    this.nameLog = nameControl;
  }
  
}