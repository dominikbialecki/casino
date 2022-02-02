import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './view/game-list/game-list.component';

const routes: Routes = [
  { path: ':id', component: GameListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'new' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {}
