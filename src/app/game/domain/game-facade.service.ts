import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './game';
import { GameCategory } from './game-category';
import { GameRepositoryService } from './game-repository.service';

@Injectable({ providedIn: 'root' })
export class GameFacadeService {

  constructor(private readonly gameRepository: GameRepositoryService) { }

  gamesByCategory(category: GameCategory): Observable<Game[]> {
    return this.gameRepository.gamesByCategory(category);
  }
}
