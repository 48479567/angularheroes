import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent {
  @Input() size: number;
  @Output() sizeChange = new EventEmitter<number>();

  constructor(

  ) { 
    this.size = 16;
  }
  inc(): void { this.resize(+1); }
  dec(): void { this.resize(-1); }

  resize(delta: number): void {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

}