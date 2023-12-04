import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../interfaces/character.interface';



@Component({
  selector: 'dbz-list',
  standalone: true,
  templateUrl: 'list.component.html',
  styleUrls: ['./list.component.css'],
  imports: [CommonModule],

})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]


    //onDelete = Index value: number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id?:string):void{
    // TODO: Emitir el ID del personaje
    //console.log({index})
    if (!id ) return;
   // console.log( {id} );
    this.onDelete.emit(id);

  }


}

