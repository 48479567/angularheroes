import { Component, Input } from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-hero-job-ad',
  template: `
    <div class="job-ad">
      <h4>{{data.healine}}</h4>
      {{data.body}}
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;
}
