import { Component, OnInit } from '@angular/core';

import { GitService } from 'src/app/modules/git/services/git/git.service';
import { FileService } from 'src/app/modules/git/services/file/file.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public constructor(private gitService: GitService, private fileService: FileService) {
    // this.gitService.emitter.subscribe({ next: (data: string) => { console.log(data); } });

    // this.gitService.clone({
    //   dir: '/iso-git',
    //   corsProxy: 'https://cors.isomorphic-git.org',
    //   url: 'https://github.com/isomorphic-git/isomorphic-git',
    //   ref: 'master',
    //   singleBranch: true,
    //   depth: 10
    // }).then(() => this.fileService.readDir('/iso-git')).then((data) => console.log(data));
  }

  ngOnInit() {
  }

}
