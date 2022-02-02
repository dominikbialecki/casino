import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameRoutingModule } from './game-routing.module';
import { GameListComponent } from './view/game-list/game-list.component';
import { GameTileComponent } from './view/game-tile/game-tile.component';


@NgModule({
  declarations: [
    GameTileComponent,
    GameListComponent
  ],
  exports: [
    GameListComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule {}
