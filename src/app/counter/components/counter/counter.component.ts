
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone:true,
  imports: [CommonModule],
  template: `

    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>



  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy( value: number):void{
    this.counter += value;
  }
  resetCounter(){
    this.counter = 10;
  }



}
