import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTreeModule, MatIconModule, MatButtonModule, MatSidenavModule } from '@angular/material';

import { MonacoEditorModule } from 'ngx-monaco-editor';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './components/editor/editor.component';
import { TreeComponent } from './components/tree/tree.component';
import { EditorService } from './services/editor/editor.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditorComponent, TreeComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditorRoutingModule,
    MonacoEditorModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [EditorService]
})
export class EditorModule { }
