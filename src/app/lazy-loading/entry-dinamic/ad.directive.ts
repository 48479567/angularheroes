import { Directive, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appAddHost]' })
export class AdDirective {
  constructor(
    public viewContainerRef: ViewContainerRef

  ) { }
}
