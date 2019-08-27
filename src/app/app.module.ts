import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// import { AppComponentModule } from './app-component.module';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../services/in-memory-data.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppMatModule } from './app-mat.module';

import { HeroesComponent } from './heroes/heroes.component';
import { OtherHeroesComponent } from './other-heroes/other-heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroCheckComponent } from './hero-check/hero-check.component';
import { DateComponent } from './date/date.component';
import { SizerComponent } from './sizer/sizer.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

import { NgModelComponent } from './ng-model/ng-model.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent, NgSwitchComponents } from './ng-switch/ng-switch.component';
import { GridComponent } from './grid/grid.component';
import { ViewChangesComponent } from './view-changes/view-changes.component';
import { SvgComponent } from './svg/svg.component';
import { SelectFavoriteHero } from './select-favorite-hero/select-favorite-hero.component';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    OtherHeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroFormComponent,
    HeroCheckComponent,
    DateComponent,
    SizerComponent,
    NgModelComponent,
    NgForComponent,
    NgSwitchComponent,
    NgSwitchComponents,
    GridComponent,
    ViewChangesComponent,
    SvgComponent,
    SelectFavoriteHero,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // AppComponentModule,
    AppRoutingModule,
    AppMatModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
