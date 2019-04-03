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

  public async makeDir(path: string): Promise<boolean> {
    try {
      await this.fs.promises.mkdir(path);
      return true;
    } catch (error) {
      return false;
    }
  }

  public async removeDir(path: string): Promise<boolean> {
    try {
      await this.fs.promises.rmdir(path);
      return true;
    } catch (error) {
      return false;
    }
  }

  public async readDir(path: string): Promise<string[]> {
    try {
      return await this.fs.promises.readdir(path);
    } catch (error) {
      return undefined;
    }
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
