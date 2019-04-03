import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MonacoEditorModule } from 'ngx-monaco-editor';

import { EditorRoutingModule } from './editor-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EditorRoutingModule,
    MonacoEditorModule
  ],
  providers: []
})
export class EditorModule { }
