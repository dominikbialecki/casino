import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameRoutingModule } from './game-routing.module';
import { GameListComponent } from './view/game-list/game-list.component';
import { GameTileRibbonComponent } from './view/game-tile-ribbon/game-tile-ribbon.component';
import { GameTileComponent } from './view/game-tile/game-tile.component';


@NgModule({
  declarations: [
    GameTileComponent,
    GameListComponent,
    GameTileRibbonComponent
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
