import { Injectable } from '@angular/core';
import { IEntry } from 'src/app/modules/git/services/file/file.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  public newEditor: Subject<IEntry> = new Subject<IEntry>();

  constructor() { }
}
