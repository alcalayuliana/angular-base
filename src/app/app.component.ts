import { Component } from '@angular/core';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { CounterComponent } from './counter/components/counter/counter.component';

import { MainPageComponent } from './dbz/pages/main-page.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, ListComponent, CounterComponent, MainPageComponent],
  templateUrl: './app.component.html',


})
export class AppComponent {
  public title: string = 'Hola Mundo';
}
