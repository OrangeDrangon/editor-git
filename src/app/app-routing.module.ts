import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'info',
    loadChildren: './modules/info/info.module#InfoModule'
  },
  {
    path: 'editor',
    loadChildren: './modules/editor/editor.module#EditorModule'
  },
  {
    path: '**',
    redirectTo: 'info'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
