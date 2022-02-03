import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GAME_ENDPOINTS } from '../config/game.endpoints';
import { Game } from './game';
import { GameCategory } from './game-category';
import { GameDto } from './game.dto';

@Injectable({ providedIn: 'root' })
export class GameRepositoryService {

  constructor(private readonly http: HttpClient) {}

  games(): Observable<Game[]> {
    return this.http.get<GameDto[]>(GAME_ENDPOINTS.GAMES).pipe(
      map(response => response.map(dto => ({
        ...dto,
        categories: [...dto.categories],
        isTop: dto.categories.includes(GameCategory.TOP),
        isNew: dto.categories.includes(GameCategory.NEW)
      })))
    );
  }
}
