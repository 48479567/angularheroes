export class Tile {
  static tiles: Array<Tile> = [
    new Tile('ligthblue', 3, 1, 'One'),
    new Tile('lightgreen', 1, 2, 'Two'),
    new Tile('lightpink', 1, 1, 'Three'),
    new Tile('#DDBDF1', 2, 1, 'Four'),
  ];

  constructor(
    public color?: string,
    public cols?: number,
    public rows?: number,
    public text?: string
  ) {

  }

  clone(): Tile {
    return Object.assign(new Tile(), this);
  }
}