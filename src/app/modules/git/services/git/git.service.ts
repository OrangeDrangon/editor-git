import { Injectable } from '@angular/core';

import * as git from 'isomorphic-git';

import { FileService } from '../file/file.service';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  public constructor(private fileService: FileService) {
    git.plugins.set('fs', this.fileService.fs);
  }

  public async clone(options: ICloneOptions): Promise<void> {
    await this.fileService.makeDir(options.dir);
    return await git.clone(options);
  }

  public async add(options: IAddOptions): Promise<void> {
    return await git.add(options);
  }

  public async commit(options: ICommitOptions): Promise<string> {
    return await git.commit(options);
  }

}

interface ICloneOptions {
  dir: string;
  url: string;
  corsProxy: string;
  ref: string;
  singleBranch: boolean;
  depth: number;
  username?: string;
  password?: string;
}

interface IAddOptions {
  dir: string;
  filepath: string;
}

interface ICommitOptions {
  dir: string;
  author: {
    name: string;
    email: string;
  };
  message: string;
}
