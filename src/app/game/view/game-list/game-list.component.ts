import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';
import { Game } from '../../domain/game';
import { GameFacadeService } from '../../domain/game-facade.service';

@Component({
  selector: 'bet-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameListComponent {

  readonly category = 'new';
  readonly games$ = this.facade.gamesByCategory(this.category);
  readonly gameTrackFunction: TrackByFunction<Game> = (index, game) => game.id;

  constructor(private readonly facade: GameFacadeService) { }
}
