import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule, MatExpansionModule, MatButtonModule, MatSelectModule } from '@angular/material';


import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './components/info/info.component';
import { FormComponent } from './components/form/form.component';
import { ReposComponent } from './components/repos/repos.component';
import { ReposService } from './services/repos/repos.service';
import { GitModule } from '../git/git.module';

@NgModule({
  declarations: [InfoComponent, FormComponent, ReposComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
    GitModule,
    FormsModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [ReposService]
})
export class InfoModule { }
