import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  imports: [CommonModule],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizeName(): string{
    return this.name.toUpperCase();

  }
  getHeroDescription(): string {

    return `${ this.name } - ${ this.age }`;

  }
  changeHero():void{
    this.name = 'Spiderman';
  }
  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }
}
