import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../classes/hero.class';
import { HeroService } from '../../../services/hero.service';

@Component({
  selector: 'app-spy',
  template: `
    <mat-form-field>
      <input matInput placeholder="Hero Name" #heroName/>
    </mat-form-field>
    <button mat-button (click)="add(heroName.value); heroName.value = ''">Inser Hero</button>
    <br/>
    <mat-list>
      <mat-list-item spy *ngFor="let hero of heroes">
        <mat-icon mat-list-icon>security</mat-icon>
          <p mat-line>{{hero.id}} - {{hero.name}}</p>
        <button mat-icon-button color="warn" (click)="delete(hero)">
          <mat-icon>money_off</mat-icon></button>
      </mat-list-item>
    </mat-list>
  `
})
export class SpyComponent implements OnInit {
  heroes: Array<Hero>;
  newHeroName: string;

  constructor(
    private heroService: HeroService

  ) {

  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe((heroes: Array<Hero>) => this.heroes = heroes);
  }

  add(heroName: string): void {
    const name = heroName.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(
        (newHero: Hero) => this.heroes.push(newHero));
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }


}
