import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroes: string[] = ['ironman', 'spiderman', 'thor', 'hulk', 'captain america'];

  public deletedHero?: string = '';
  removeLastHero(): void {
  this.deletedHero =this.heroes.pop();
  }
}
