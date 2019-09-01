import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef

} from '@angular/core';

@Directive({
  selector: '[appUntil]'
})
export class UntilDirective {
  @Input() set appUntil(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);

      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }

  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }


}
