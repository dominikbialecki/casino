import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Game } from '../../domain/game';

@Component({
  selector: 'bet-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameTileComponent {

  @HostBinding('tabindex') tabindex = 0;

  @Input() game!: Game;
  @Input() newRibbon = false;
  @Input() topRibbon = false;
}
