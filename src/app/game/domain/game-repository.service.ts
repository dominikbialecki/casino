import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GAME_ENDPOINTS } from '../config/game.endpoints';
import { Game } from './game';
import { GameDto } from './game.dto';

@Injectable({ providedIn: 'root' })
export class GameRepositoryService {

  constructor(private readonly http: HttpClient) {}

  games(): Observable<Game[]> {
    return this.http.get<GameDto[]>(GAME_ENDPOINTS.GAMES).pipe(
      map(response => response.map(dto => Game.create(dto)))
    );
  }
}
