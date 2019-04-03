import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule, MatExpansionModule } from '@angular/material';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './components/editor/editor.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [EditorComponent, FormComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    FormsModule,
    MatInputModule,
    MatExpansionModule
  ]
})
export class EditorModule { }
