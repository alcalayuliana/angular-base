import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone:true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  imports: [CommonModule],

})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She hulk', 'Thor']

  public deletedHero?: string;//se debe declarar aqui para que pueda ser utilizada desde la funcion

removeLastHero():void{

  this.deletedHero = this.heroNames.pop();
  //const deleteHero = this.heroNames.pop();
  //console.log(deleteHero);
}


}
