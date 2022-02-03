import { Component } from '@angular/core';
import { NAVBAR_ITEMS } from './config/navbar-items';

@Component({
  selector: 'bet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navbarItems = NAVBAR_ITEMS;
}
