import { Component } from '@angular/core';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, ListComponent],
  templateUrl: './app.component.html',


})
export class AppComponent {
  public title: string = 'Hola Mundo';
}
