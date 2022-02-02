import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'games', loadChildren: () => import('./game/game.module').then(m => m.GameModule) },
  { path: '', pathMatch: 'full', redirectTo: 'games' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
