import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AddCharacterComponent } from '../components/add-character/add-character.component';
import { Character } from '../interfaces/character.interface';
import { ListComponent } from '../components/list/list.component';
import { DbzService } from '../services/dbz.service.ts.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: true,
  imports: [CommonModule, ListComponent, AddCharacterComponent],
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  constructor( private dbzService: DbzService ){}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id:string ):void{
    this.dbzService.deleteCharacterById( id )
  }

  onNewCharacter( character: Character):void{
    this.dbzService.AddCharacter(character);

  }
}
