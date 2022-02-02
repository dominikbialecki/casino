import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { Game } from '../../domain/game';
import { GameCategory } from '../../domain/game-category';
import { GameFacadeService } from '../../domain/game-facade.service';

@Component({
  selector: 'bet-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameListComponent {

  readonly games$: Observable<Game[]>;
  readonly gameTrackFunction: TrackByFunction<Game> = (index, game) => game.id;

  constructor(private readonly facade: GameFacadeService,
              private readonly activatedRoute: ActivatedRoute
  ) {
    const categories$ = this.activatedRoute.data.pipe(map(data => data['categories'] as GameCategory[]));
    this.games$ = categories$.pipe(
      switchMap(categories => categories[0] ? this.facade.gamesByCategory(categories[0]) : of([]))
    );
  }
}
