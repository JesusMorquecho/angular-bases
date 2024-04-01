import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
public characters:Character[]=[{
    name: 'Trunks',
   power: 10
  }]
@Output()
public onDelete: EventEmitter<string> = new EventEmitter();

  onNewCharacter(character: Character): void {
    console.log('Adding new character', character);
    this.characters.push(character);
  }
  OnDeleteCharacter(id?: string): void {
    if (!id) return;
    console.log('Id', id);

    this.onDelete.emit();
  }
}
