import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiImageModule } from '../ui/ui-image/ui-image.module';
import { GameRoutingModule } from './game-routing.module';
import { GameListContainerComponent } from './view/game-list-container/game-list-container.component';
import { GameListComponent } from './view/game-list/game-list.component';
import { GameTileRibbonComponent } from './view/game-tile-ribbon/game-tile-ribbon.component';
import { GameTileComponent } from './view/game-tile/game-tile.component';


@NgModule({
  declarations: [
    GameTileComponent,
    GameListComponent,
    GameTileRibbonComponent,
    GameListContainerComponent
  ],
  exports: [
    GameListComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    UiImageModule
  ]
})
export class GameModule {}
