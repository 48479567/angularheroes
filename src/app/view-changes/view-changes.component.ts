import { 
  Component, 
  Input,
  Output,
  EventEmitter,
  OnInit, 
  AfterViewInit, 
  ViewChildren,
  QueryList,
  ElementRef
} from '@angular/core';

import { Hero } from '../../classes/hero.class';

@Component({
  selector: 'app-view-changes',
  templateUrl: './view-changes.component.html',
  styles: ['button { padding: 0; margin: 0; font-size: 12px }'] 
})
export class ViewChangesComponent implements OnInit, AfterViewInit {
  @Input() element: string;
  @Output() elementChange = new EventEmitter<string>();
  @Output() tileChange = new EventEmitter<void>();

  @ViewChildren('selectDiv') selectDiv: QueryList<ElementRef>;
  @ViewChildren('otherSelectDiv') otherSelectDiv: QueryList<ElementRef>;

  heroes: Array<Hero> = [
    new Hero(5, 'new Hero'),
    new Hero(5, 'Other'),
  ];

  active = true;

  constructor(

  ) {
  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.trackChanges(this.selectDiv, () => {});
    this.trackChanges(this.otherSelectDiv, () => {});
  }

  sendValue(sendValue: string): void {
    this.element = sendValue;
    this.elementChange.emit(this.element);
  }

  resetHero(): void {
    this.heroes.forEach((h: Hero) => { h.id += 5 });
    this.tileChange.emit();
  }


  trackByHeroes(id: number, hero: Hero): number {
    return hero.id;
  }

  trackChanges(views: QueryList<ElementRef>, changed: () => void): void {
    let oldRefs = views.toArray();
    views.changes.subscribe((changes: QueryList<ElementRef>) => {   
      const changedRefs = changes.toArray();
      const isSame = oldRefs.every((v, i) => v.nativeElement === changedRefs[i].nativeElement);
      if (!isSame) {
        oldRefs = changedRefs;
        setTimeout(changed, 0);
      }
    });
  }
}