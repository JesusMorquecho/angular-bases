import {Component} from '@angular/core'
import { Character } from '../interfaces/character.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({

    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) {
  }
  get Character(): Character[] {
    return [...this.dbzService.characters];
  }
  onDeletedCharacter(id: string): void {
    this.dbzService.OnDeleteCharacterById(id);
  }
  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
