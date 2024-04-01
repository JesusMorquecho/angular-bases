import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
@Output()
public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
  name: '',
  power: 0,
  };
  emitCharacter(): void{
  console.log(this.character);
  if(this.character.name.trim().length != 0){
  this.onNewCharacter.emit(this.character);
  this.character.name = '';
  this.character.power = 0;
  }
}
}
