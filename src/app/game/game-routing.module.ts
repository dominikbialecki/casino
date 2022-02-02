import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameCategory } from './domain/game-category';
import { GameListComponent } from './view/game-list/game-list.component';

const routes: Routes = [
  { path: 'top', component: GameListComponent, data: { categories: [GameCategory.TOP] } },
  { path: 'new', component: GameListComponent, data: { categories: [GameCategory.NEW] } },
  { path: 'slots', component: GameListComponent, data: { categories: [GameCategory.SLOTS] } },
  { path: 'jackpots', component: GameListComponent, data: { categories: [GameCategory.JACKPOT] } },
  { path: 'live', component: GameListComponent, data: { categories: [GameCategory.BLACKJACK] } },
  { path: 'blackjack', component: GameListComponent, data: { categories: [GameCategory.BLACKJACK] } },
  { path: 'roulette', component: GameListComponent, data: { categories: [GameCategory.ROULETTE] } },
  { path: 'table', component: GameListComponent, data: { categories: [GameCategory.CLASSIC] } },
  { path: 'poker', component: GameListComponent, data: { categories: [GameCategory.POKER] } },
  {
    path: 'other',
    component: GameListComponent,
    data: { categories: [GameCategory.FUN, GameCategory.VIRTUAL, GameCategory.BALL] }
  },
  { path: '', pathMatch: 'full', redirectTo: 'new' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {}
