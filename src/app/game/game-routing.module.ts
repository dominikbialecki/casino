import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { GameCategory } from './domain/game-category';
import { GameListContainerComponent } from './view/game-list-container/game-list-container.component';

export interface GameListRouteData {
  categories: GameCategory[];
  disableTopRibbons?: boolean;
  disableNewRibbons?: boolean;
}

function gameListRoute(props: { path: string } & GameListRouteData): Route {
  const { path, ...data } = props;
  return { path, component: GameListContainerComponent, data };
}

const routes: Routes = [
  gameListRoute({ path: 'top', categories: [GameCategory.TOP], disableTopRibbons: true }),
  gameListRoute({ path: 'new', categories: [GameCategory.NEW], disableNewRibbons: true }),
  gameListRoute({ path: 'slots', categories: [GameCategory.SLOTS] }),
  gameListRoute({ path: 'jackpots', categories: [GameCategory.JACKPOT] }),
  gameListRoute({ path: 'live', categories: [GameCategory.LIVE] }),
  gameListRoute({ path: 'blackjack', categories: [GameCategory.BLACKJACK] }),
  gameListRoute({ path: 'roulette', categories: [GameCategory.ROULETTE] }),
  gameListRoute({ path: 'table', categories: [GameCategory.TABLE] }),
  gameListRoute({ path: 'poker', categories: [GameCategory.POKER] }),
  gameListRoute({ path: 'other', categories: [GameCategory.FUN, GameCategory.VIRTUAL, GameCategory.BALL] }),
  { path: '', pathMatch: 'full', redirectTo: 'new' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {}
