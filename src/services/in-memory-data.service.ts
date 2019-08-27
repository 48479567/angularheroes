import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from '../classes/hero.class';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  constructor() { }

  createDb(): { heroes: Array<Hero> } {
    const heroes: Array<Hero> = [
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
    return { heroes };
  }

  /*
  Anula el método genId para asegurar que un héroe siempre tenga una identificación. Si la matriz de héroes está vacía,
  el siguiente método devuelve el número inicial (11). Si la matriz de héroes no está vacía,
  el siguiente método devuelve el más alto: ID de héroe + 1.
  */
  genId(heroes: Array<Hero>): number {
    console.log(heroes);
    return heroes.length > 0 ? Math.max(...heroes.map((hero: Hero) => hero.id)) + 1 : 11;
  }

}