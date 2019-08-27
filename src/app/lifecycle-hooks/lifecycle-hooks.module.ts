import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LifecycleHooksRoutingModule } from './lifecycle-hooks-routing.module';
import { AppMatModule } from '../app-mat.module';

import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { ChangesComponent } from './changes/changes.component';
import { ParentChangesComponent } from './changes/parent-changes.component';
import { ParentDoCheckComponent } from './do-check/parent-do-check.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { ParentAfterViewComponent } from './after-view/parent-after-view.component';
import { AfterViewComponent } from './after-view/after-view.component';
import { ParentAfterContentComponent } from './after-content/parent-after-content.component';
import { ChildAfterContentComponent } from './after-content/child-after-content.component';
import { AfterContentComponent } from './after-content/after-content.component';
import { ButtonClearComponent } from './control-log/button-clear-log.component';
import { ViewLogComponent } from './control-log/view-log.component';
import { SpyDirective } from './spy/spy.directive';
import { SpyComponent } from './spy/spy.component';


@NgModule({
  declarations: [
    LifecycleHooksComponent,
    ChangesComponent,
    ParentChangesComponent,
    DoCheckComponent,
    ParentDoCheckComponent,
    AfterViewComponent,
    ParentAfterViewComponent,
    AfterContentComponent,
    ParentAfterContentComponent,
    ChildAfterContentComponent,
    ButtonClearComponent,
    ViewLogComponent,
    SpyDirective,
    SpyComponent,
  ],
  imports: [
    CommonModule,
    LifecycleHooksRoutingModule,
    FormsModule,
    AppMatModule,
  ]
})
export class LifecycleHooksModule { }