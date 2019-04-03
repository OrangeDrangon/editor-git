import { Component, OnInit, Input } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

import { FileService, IEntry } from '../../../git/services/file/file.service';

@Component({
  selector: 'app-editor-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  
  @Input() repo: string;
  
  public treeControl = new NestedTreeControl<IEntry>(node => node.children);
  public dataSource = new MatTreeNestedDataSource<IEntry>();

  public constructor(private fileService: FileService) { }

  public async ngOnInit() {
	this.dataSource.data = await this.fileService.generateTree(this.repo);
  }
  
  hasChild = (_: number, node: IEntry) => !!node.children && node.children.length > 0;
}