import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Game } from '../../domain/game';

@Component({
  selector: 'bet-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameTileComponent {
  @Input() game!: Game;
}
