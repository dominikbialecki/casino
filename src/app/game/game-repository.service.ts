import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Game } from './game';
import { GameCategory } from './game-category';
import { GameDto } from './game.dto';
import { GAME_ENDPOINTS } from './game.endpoints';

@Injectable({ providedIn: 'root' })
export class GameRepositoryService {

  constructor(private readonly http: HttpClient) {}

  games(): Observable<Game[]> {
    return this.http.get<GameDto[]>(GAME_ENDPOINTS.GAMES).pipe(
      map(response => response.map(dto => new Game({
        ...dto,
        categories: [...dto.categories]
      })))
    );
  }

  gamesByCategory(category: GameCategory): Observable<Game[]> {
    return this.games().pipe(
      map(games => games.filter(game => game.hasCategory(category)))
    );
  }
}
