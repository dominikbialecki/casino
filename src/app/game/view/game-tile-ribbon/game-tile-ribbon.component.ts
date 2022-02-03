import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'bet-game-tile-ribbon',
  templateUrl: './game-tile-ribbon.component.html',
  styleUrls: ['./game-tile-ribbon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameTileRibbonComponent {
  @Input() text: string = '';
  @Input() @HostBinding('class') corner: 'top-right' | 'top-left' = 'top-right';
}
