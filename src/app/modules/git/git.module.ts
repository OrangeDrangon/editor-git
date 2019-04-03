import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitService } from './services/git/git.service';
import { FileService } from './services/file/file.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GitService,
    FileService
  ]
})
export class GitModule { }
