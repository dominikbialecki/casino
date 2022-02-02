import { Component } from '@angular/core';
import { GameCategory } from './game/domain/game-category';

@Component({
  selector: 'bet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navBarItems = [
    { label: 'Top Games', category: GameCategory.TOP },
    { label: 'New Games', category: GameCategory.NEW },
    { label: 'Slots', category: GameCategory.SLOTS },
    { label: 'Jackpots', category: GameCategory.SLOTS },
    { label: 'Live', category: undefined }, // TODO what should be displayed here?
    { label: 'Blackjack', category: GameCategory.BLACKJACK },
    { label: 'Roulette', category: GameCategory.ROULETTE },
    { label: 'Table', category: GameCategory.CLASSIC },// TODO table === classic?
    { label: 'Poker', category: GameCategory.POKER },
    { label: 'Other', category: GameCategory.BALL }
  ];
}
