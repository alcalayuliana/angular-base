import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';
import { AddCharacterComponent } from '../components/add-character/add-character.component';



@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegueta',
    power: 7500
  }
];

  AddCharacter(character: Character):void{

    const newCaracter: Character = { id:uuid(),...character};

    this.characters.push(newCaracter);

  }

  //onDeleCharacter( index:number ){
    //this.characters.splice(index,1);
 // }
 deleteCharacterById( id:string ){
    this.characters = this.characters.filter( Character => Character.id != id );
 }

}
