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
  
  public async generateTree(dir: string): Promise<IEntry[]> {
	const array: IEntry[] = [];
	const files = await this.readDir(`/${dir}`);
	for (const file of files) {
      if (file === '.git'){ continue; }
	  const split = file.split('.');
	  if (split[1] !== undefined) {
		  const read = async () => { 
		    return await this.readFile(`/${dir}/${file}`); 
		  };
		  array.push({ name: file, type: 'file', read });
	  } else {
		  array.push({ name: file, type: 'directroy', children: await this.generateTree(`${dir}/${file}`) });
	  }
	}
	return array;
  }
}

export interface IEntry {
  name: string;
  type: 'file' | 'directroy';
  children?: IEntry[];
  read?: () => Promise<string>;
}
