export class Hero {
  static nextId = 0;
  static heroes: Array<Hero> = [
    new Hero(11, 'Mr. nice', 'whatever'),
    new Hero(12, 'Narco', 'sad'),
    new Hero(13, 'Bombasto', 'happy'),
    new Hero(14, 'Celeritas', 'so-so'),
    new Hero(15, 'Magneta', 'whatever'),
    new Hero(16, 'RubberMan', 'confused'),
    new Hero(17, 'Dynama', 'whatever'),
    new Hero(18, 'Dr IQ', 'sad'),
    new Hero(19, 'Magma', 'happy'),
    new Hero(20, 'Tornado', 'whatever'),
  ];

  constructor(
    public id?: number,
    public name?: string,
    public emotion?: string
  ) {
    this.id = this.id ? this.id : Hero.nextId++;
  }

  clone(): Hero {
    return Object.assign(new Hero(), this);
  }
}