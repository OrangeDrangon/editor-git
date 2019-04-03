import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorComponent } from './components/editor/editor.component';

const routes: Routes = [
  {
    path: ':repo',
    component: EditorComponent
  },
  {
    path: '**',
    redirectTo: '/info'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
