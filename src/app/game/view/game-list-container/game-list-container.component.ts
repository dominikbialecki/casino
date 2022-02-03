import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Game } from '../../domain/game';
import { GameFacadeService } from '../../domain/game-facade.service';
import { GameListRouteData } from '../../game-routing.module';

@Component({
  selector: 'bet-game-list-container',
  templateUrl: './game-list-container.component.html',
  styleUrls: ['./game-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameListContainerComponent {

  readonly data$: Observable<GameListRouteData>;
  readonly games$: Observable<Game[]>;

  constructor(readonly facade: GameFacadeService,
              private readonly activatedRoute: ActivatedRoute
  ) {
    this.data$ = this.activatedRoute.data as Observable<GameListRouteData>;
    this.games$ = this.data$.pipe(
      switchMap(({ categories }) => this.facade.gamesByCategories(categories))
    );
  }
}
