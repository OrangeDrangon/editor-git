import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public repo: string;

  public constructor(private route: ActivatedRoute) { }

  public ngOnInit() {
    this.repo = this.route.snapshot.paramMap.get('repo');
  }

}
