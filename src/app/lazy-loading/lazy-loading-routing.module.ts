import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading.component';
import { EntryDinamicComponent } from './entry-dinamic/entry-dinamic.component';

const routes: Routes = [
  { path: '', component: LazyLoadingComponent,
    children: [
      { path: 'entry-dinamic', component: EntryDinamicComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LazyLoadingRoutingModule { }
