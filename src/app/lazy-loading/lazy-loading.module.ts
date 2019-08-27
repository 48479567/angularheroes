import { NgModule } from '@angular/core';
import { LazyLoadingRoutingModule} from './lazy-loading-routing.module';
import { LazyLoadingComponent } from './lazy-loading.component';

@NgModule({
  imports: [
    LazyLoadingRoutingModule,

  ],
  declarations: [
    LazyLoadingComponent
  ]
})
export class LazyLoadingModule {

}