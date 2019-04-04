import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditorService } from '../../services/editor/editor.service';
import { IEntry } from 'src/app/modules/git/services/file/file.service';

@Component({
  selector: 'app-editor-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public repo: string;
  public editorOptions = {theme: 'vs-dark', language: 'typescript'};
  public code = 'console.log("Hello World");';

  public constructor(private route: ActivatedRoute, private editorService: EditorService) {
    this.editorService.newEditor.subscribe(async (node: IEntry) => {
      this.code = await node.read();
    });
  }

  public ngOnInit() {
    this.repo = this.route.snapshot.paramMap.get('repo');
  }

}
