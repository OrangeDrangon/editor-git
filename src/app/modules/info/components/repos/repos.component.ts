import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReposService } from '../../services/repos/repos.service';

@Component({
  selector: 'app-info-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  public selected: string;

  public constructor(public reposService: ReposService, private router: Router) { }

  public ngOnInit() {
  }

  public async open() {
    if (this.selected) {
      await this.router.navigate(['/editor', this.selected]);
    }
  }

}
