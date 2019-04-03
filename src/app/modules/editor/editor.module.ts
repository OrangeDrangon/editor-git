import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatTreeModule, MatIconModule, MatButtonModule} from '@angular/material'; 

import { MonacoEditorModule } from 'ngx-monaco-editor';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './components/editor/editor.component';
import { TreeComponent } from './components/tree/tree.component';

@NgModule({
  declarations: [EditorComponent, TreeComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    MonacoEditorModule,
	MatTreeModule,
	MatIconModule,
	MatButtonModule
  ],
  providers: []
})
export class EditorModule { }
