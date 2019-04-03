import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  public readonly repos: string[];

  constructor() {
    this.repos = JSON.parse(localStorage.getItem('repos')) || [];
  }

  public add(repo: string) {
    this.repos.push(repo);
    localStorage.setItem('repos', JSON.stringify(this.repos));
  }
}
