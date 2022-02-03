import { ChangeDetectionStrategy, Component, Input, TrackByFunction } from '@angular/core';
import { Game } from '../../domain/game';

@Component({
  selector: 'bet-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameListComponent {

  readonly gameTrackFunction: TrackByFunction<Game> = (index, game) => game.id;

  @Input() games: Game[] = [];
  @Input() disableTopRibbon?: boolean;
  @Input() disableNewRibbon?: boolean;
}
