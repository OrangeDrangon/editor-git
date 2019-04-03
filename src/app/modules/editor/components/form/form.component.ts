import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/modules/git/services/file/file.service';
import { GitService, ICloneOptions } from 'src/app/modules/git/services/git/git.service';

@Component({
  selector: 'app-editor-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public data = {
    name: '',
    url: '',
    depth: 10,
    username: '',
    password: ''
  };

  public constructor(private fileService: FileService, private gitService: GitService) { }

  public async ngOnInit() { }

  public async clone() {
    const { name, url, depth, username, password } = this.data;
    if (name !== '' && url !== '') {
      if (!!!await this.fileService.readDir(`/${name}`)) {
        const options: ICloneOptions = {
          dir: `/${name}`,
          url,
          corsProxy: 'https://cors.isomorphic-git.org',
          depth: depth < 1 ? 1 : depth,
          ref: 'master',
          singleBranch: true,
          username,
          password
        };
        await this.gitService.clone(options);
        const files = await this.fileService.readDir(`/${this.data.name}`);
        console.log(files);
      } else {
        alert('Repo already cloned!');
      }
    } else {
      alert('Name and URL required!');
    }
  }

}
