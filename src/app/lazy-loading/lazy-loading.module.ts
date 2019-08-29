import { NgModule } from '@angular/core';
import { LazyLoadingRoutingModule} from './lazy-loading-routing.module';
import { LazyLoadingComponent } from './lazy-loading.component';
import { AppMatModule } from '../app-mat.module';
import { AdDirective } from './entry-dinamic/ad.directive';
import { AdBannerComponent } from './entry-dinamic/ad-banner.component';
import { HeroJobAdComponent } from './entry-dinamic/hero-job-ad.component';
import { HeroProfileComponent } from './entry-dinamic/hero-profile.component';
import { EntryDinamicComponent } from './entry-dinamic/entry-dinamic.component';

@NgModule({
  imports: [
    LazyLoadingRoutingModule,
    AppMatModule,


  ],
  declarations: [
    LazyLoadingComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    EntryDinamicComponent


  ],
  entryComponents: [
    HeroJobAdComponent,
    HeroProfileComponent,

  ]
})
export class LazyLoadingModule {

}
