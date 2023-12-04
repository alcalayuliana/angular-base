import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dbz-add-character',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewChapter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };



  emitCharacter(): void{



  //  console.log(this.character);

    if ( this.character.name.length === 0) return;


    this.onNewChapter.emit(this.character);//componente hijo esta emitiendo el caracter
    this.character = {name:'', power:0}

   // console.log(this.character);
   // this.character.name = '';
   // this.character.power = 0
  }
}
