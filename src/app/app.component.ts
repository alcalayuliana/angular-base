import { Component } from '@angular/core';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { CounterComponent } from './counter/components/counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, ListComponent, CounterComponent],
  templateUrl: './app.component.html',


})
export class AppComponent {
  public title: string = 'Hola Mundo';
}
