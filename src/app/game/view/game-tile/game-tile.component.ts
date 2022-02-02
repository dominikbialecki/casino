import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bet-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameTileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
