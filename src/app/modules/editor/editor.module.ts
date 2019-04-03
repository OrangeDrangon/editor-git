import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatExpansionModule, MatButtonModule } from '@angular/material';

import { MonacoEditorModule } from 'ngx-monaco-editor';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './components/editor/editor.component';
import { FormComponent } from './components/form/form.component';
import { ReposComponent } from './components/repos/repos.component';

@NgModule({
  declarations: [EditorComponent, FormComponent, ReposComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    FormsModule,
    MonacoEditorModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule
  ]
})
export class EditorModule { }
