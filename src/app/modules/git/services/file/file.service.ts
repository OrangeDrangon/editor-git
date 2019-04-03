import { Injectable } from '@angular/core';

import FS from '@isomorphic-git/lightning-fs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  public fs: any;

  public constructor() {
    this.fs = new FS('git');
  }

  public async makeDir(path: string): Promise<void> {
    try {
      return await this.fs.promises.mkdir(path);
    } catch (error) {
      console.error(error);
    }
  }

  public async removeDir(path: string): Promise<void> {
    return await this.fs.promises.rmdir(path);
  }

  public async readDir(path: string): Promise<string[]> {
    return await this.fs.promises.readdir(path);
  }

  public async writeFile(path: string, data: string): Promise<void> {
    return await this.fs.promises.writeFile(path, data);
  }

  public async readFile(path: string): Promise<string> {
    const decoder = new TextDecoder();
    return decoder.decode(await this.fs.promises.readFile(path));
  }

  public async removeFile(path: string): Promise<void> {
    return await this.fs.promises.unlink(path);
  }

}
