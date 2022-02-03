import { Component } from '@angular/core';

@Component({
  selector: 'bet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navBarItems = [
    { label: 'Top Games', path: 'top' },
    { label: 'New Games', path: 'new' },
    { label: 'Slots', path: 'slots' },
    { label: 'Jackpots', path: 'jackpots' },
    { label: 'Live', path: 'live' },
    { label: 'Blackjack', path: 'blackjack' },
    { label: 'Roulette', path: 'roulette' },
    { label: 'Table', path: 'table' },
    { label: 'Poker', path: 'poker' },
    { label: 'Other', path: 'other' }
  ];
}
