import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { ParentChangesComponent } from './changes/parent-changes.component';
import { ParentDoCheckComponent } from './do-check/parent-do-check.component';
import { ParentAfterContentComponent } from './after-content/parent-after-content.component';
import { ParentAfterViewComponent } from './after-view/parent-after-view.component';
import { SpyComponent } from './spy/spy.component';

const routes: Routes = [
  { path: '', component: LifecycleHooksComponent,
    children: [
      { path: 'changes', component: ParentChangesComponent },
      { path: 'do-check', component: ParentDoCheckComponent },
      { path: 'after-view', component: ParentAfterViewComponent },
      { path: 'after-content', component: ParentAfterContentComponent },
      { path: 'spy', component: SpyComponent },

    ]
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [
    RouterModule,
  ]
})
export class LifecycleHooksRoutingModule {}