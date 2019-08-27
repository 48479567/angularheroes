import { 
  Component, 
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef
} from '@angular/core';

import { Tile } from '../../classes/tile.class';

@Component({
  selector: 'app.grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements AfterViewInit {
  tiles: Array<Tile> = [
    new Tile('ligthblue', 3, 1, 'One'),
    new Tile('lightgreen', 1, 2, 'Two'),
    new Tile('lightpink', 1, 1, 'Three'),
    new Tile('#DDBDF1', 2, 1, 'Four'),
  ];

  @ViewChildren('withTrackBy') withTrackBy: QueryList<ElementRef>;
  @ViewChildren('withoutTrackBy') withoutTrackBy: QueryList<ElementRef>;

  countWithTrackBy = 0;
  countWithoutTrackBy = 0;
  count = 1;

  constructor(

  ) { }

  trackByTile(id: number, tile: Tile): string {
    return tile.text;
  }

  ngAfterViewInit(): void {
    this.trackChanges(this.withTrackBy, () => this.countWithTrackBy++, ' :with: ');
    this.trackChanges(this.withoutTrackBy, () => this.countWithoutTrackBy++, ' :without');
  }


  trackChanges(views: QueryList<ElementRef>, changed: () => void, sel?: string): void {
    // const c = console.log;

    // c(`views${sel}`, views);

    let oldRefs = views.toArray();
    
    // c(`oldRefs${sel}`, oldRefs);
    
    views.changes.subscribe((changes: QueryList<ElementRef>) => {
      // c(`changes${sel}`, changes);
      
      const changedRefs = changes.toArray();
      // c(`changedRefs${sel}`, changedRefs);

      const isSame = oldRefs.every((v, i) => {
        // c(`v${sel}`, v);
        // c(`i${sel}`, i);
        return v.nativeElement === changedRefs[i].nativeElement
        }
      );
      if (!isSame) {
        oldRefs = changedRefs;
        setTimeout(changed, 0);
      }
    });

  }

  changeTextTiles(): void {
    this.tiles.forEach((tile: Tile) => tile.text = `Other ${this.count++}`
    );
  }

  resetTiles(): void {
    this.tiles = this.tiles.map((tile: Tile) => tile.clone());
  }
  
}