import {
  Component,
  // OnChanges,
  // OnInit,
  // DoCheck,
  // AfterContentInit,
  // AfterContentChecked,
  // AfterViewInit,
  // AfterViewChecked,
  // OnDestroy,
  // SimpleChanges,
  // Input
} from '@angular/core';

import { Hero } from '../../classes/hero.class';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent 
// implements 
//   OnChanges,
//   OnInit,
//   DoCheck,
//   AfterContentInit,
//   AfterContentChecked,
//   AfterViewInit,
//   AfterViewChecked,
//   OnDestroy 
  {
    timeOut: any;
    
    viewCheck: boolean;

    constructor(
    ) {
      // this.timeOut = setInterval(
      //   () => console.log('constructor')
      //   , 3000
      // );
      this.viewCheck = true;
    }

    // ngOnChanges(): void {
    //   if (this.viewCheck) console.log('ngOnChanges');
    // }

    // ngOnInit(): void {
    //   // console.log('ngOnInit');
    // }
    // ngDoCheck(): void {
    //   // if (this.viewCheck) console.log('ngOnDoCheck');
    // }
    // ngAfterContentInit(): void {
    //   // console.log('ngAfterContentInit');
    // }
    // ngAfterContentChecked(): void {
    //   // if (this.viewCheck) console.log('ngAfterContentChecked');
    // }
    // ngAfterViewInit(): void {
    //   // console.log('ngAfterViewInit');
    // }
    // ngAfterViewChecked(): void {
    //   if (this.viewCheck) console.log('ngAfterViewChecked');
    // }
    // ngOnDestroy(): void {
    //   console.log('ngOnDestroy');
    //   this.clearInterval();
    // }
    // clearInterval(): void {
    //   // clearInterval(this.timeOut);
    //   this.viewCheck = false;
    // }
    

  }