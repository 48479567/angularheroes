import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { OtherHeroesComponent } from './other-heroes/other-heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroCheckComponent } from './hero-check/hero-check.component';
import { DateComponent } from './date/date.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { GridComponent } from './grid/grid.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'check', component: HeroCheckComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'date', component: DateComponent },
  { path: 'other-heroes', component: OtherHeroesComponent },
  { path: 'ng-for', component: NgForComponent },
  { path: 'ng-switch', component: NgSwitchComponent },
  { path: 'grid', component: GridComponent },
  { path: 'lifecycle-hooks', loadChildren: './lifecycle-hooks/lifecycle-hooks.module#LifecycleHooksModule' },
  { path: 'lazy-loading', loadChildren: './lazy-loading/lazy-loading.module#LazyLoadingModule' },
  // { path: 'lifecycle-hooks', loadChildren: () => import('./lifecycle-hooks/lifecycle-hooks.module').then(mod => mod.LifecycleHooksModule) },

];

@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule { }