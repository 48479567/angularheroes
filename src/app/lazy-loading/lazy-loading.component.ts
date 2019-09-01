import { Component } from '@angular/core';
import { default as learning } from '../../assets/json/learning.json'

@Component({
  selector: 'app-root',
  templateUrl: './lazy-loading.component.html',
  styleUrls: [ './lazy-loading.component.css' ]
})
export class LazyLoadingComponent   {
  condition = false;

  textResult = learning;

}
