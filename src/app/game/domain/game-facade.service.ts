import { Injectable } from '@angular/core';
import { catchError, combineLatest, EMPTY, map, Observable } from 'rxjs';
import { JackpotRepositoryService } from '../../jackpot/domain/jackpot-repository.service';
import { Game } from './game';
import { GameCategory } from './game-category';
import { GameRepositoryService } from './game-repository.service';

@Injectable({ providedIn: 'root' })
export class GameFacadeService {

  static REFRESH_PERIOD = 2000;

  constructor(private readonly gameRepository: GameRepositoryService,
              private readonly jackpotRepository: JackpotRepositoryService
  ) { }

  gamesByCategories(categories: GameCategory[]): Observable<Game[]> {
    return this.gamesWithJackpots().pipe(
      map(games => games.filter(g => g.categories.some(c => categories.includes(c))))
    );
  }

  private gamesWithJackpots(): Observable<Game[]> {
    let games$ = this.gameRepository.games();
    let jackpots$ = this.jackpotRepository.jackpots({ refreshPeriod: GameFacadeService.REFRESH_PERIOD });
    return combineLatest([games$, jackpots$]).pipe(
      map(([games, jackpots]) => {
        return games.map(game => {
          const jackpot = jackpots.find(j => j.gameId === game.id);
          if (jackpot) {
            return Game.create({ ...game, jackpot: jackpot.amount });
          } else {
            return game;
          }
        });
      }),
      catchError(e => {
        console.error('Fetching games failed', e);
        return EMPTY;
      })
    );
  }

}
