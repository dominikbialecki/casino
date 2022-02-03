import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { take } from 'rxjs';
import { JackpotDto } from '../../jackpot/domain/jackpot.dto';
import { JACKPOT_ENDPOINTS } from '../../jackpot/domain/jackpot.endpoints';
import { GAME_ENDPOINTS } from '../config/game.endpoints';
import { Game } from './game';
import { GameCategory } from './game-category';

import { GameFacadeService } from './game-facade.service';
import { GameDto } from './game.dto';

describe('GameFacadeService', () => {
  let service: GameFacadeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GameFacadeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should provide refreshable games', fakeAsync(() => {
    let result: Game[] = [];

    // Given server contains games with various categories

    const game1 = gameDtoMock({ id: '1', categories: [] });
    const game2 = gameDtoMock({ id: '2', categories: [GameCategory.NEW, GameCategory.TOP] });
    const game3 = gameDtoMock({ id: '3', categories: [GameCategory.NEW] });
    const game4 = gameDtoMock({ id: '4', categories: [GameCategory.FUN] });
    const game5 = gameDtoMock({ id: '5', categories: [GameCategory.TOP] });
    const gameServerResponse: GameDto[] = [game1, game2, game3, game4, game5];

    // And server contains jackpots

    const jackpot1 = { game: game1.id, amount: 10 };
    const jackpot2 = { game: game2.id, amount: 20 };
    const jackpot3_1 = { game: game3.id, amount: 30 };
    const jackpot3_2 = { game: game3.id, amount: 31 };
    const jackpot4 = { game: game4.id, amount: 40 };
    const jackpotServerResponse1: JackpotDto[] = [jackpot1, jackpot2, jackpot3_1];
    const jackpotServerResponse2: JackpotDto[] = [jackpot1, jackpot3_2, jackpot4];

    // When I fetch games with given categories

    service.gamesByCategories([GameCategory.NEW, GameCategory.FUN])
      .pipe(take(2))
      .subscribe(games => result = games);

    // Then games were returned

    httpMock.expectOne({ method: 'GET', url: GAME_ENDPOINTS.GAMES }).flush(gameServerResponse);
    httpMock.expectOne({ method: 'GET', url: JACKPOT_ENDPOINTS.JACKPOTS }).flush(jackpotServerResponse1);
    tick();

    assertGames(result, [
      { id: game2.id, jackpot: jackpot2.amount },
      { id: game3.id, jackpot: jackpot3_1.amount },
      { id: game4.id, jackpot: undefined }
    ]);

    // When refresh time has elapsed

    tick(GameFacadeService.REFRESH_PERIOD);
    httpMock.expectOne({ method: 'GET', url: JACKPOT_ENDPOINTS.JACKPOTS }).flush(jackpotServerResponse2);

    // Games were refreshed and jackpots were changed

    assertGames(result, [
      { id: game2.id, jackpot: undefined },
      { id: game3.id, jackpot: jackpot3_2.amount },
      { id: game4.id, jackpot: jackpot4.amount }
    ]);
  }));

  it('games with jackpot should contain jackpot category', fakeAsync(() => {
    let result: Game[] = [];

    // Given server contains games with various categories

    const game1 = gameDtoMock({ id: '1', categories: [] });
    const game2 = gameDtoMock({ id: '2', categories: [GameCategory.NEW, GameCategory.TOP] });
    const game3 = gameDtoMock({ id: '3', categories: [GameCategory.BALL] });
    const gameServerResponse: GameDto[] = [game1, game2];

    // And server contains jackpots

    const jackpot1 = { game: game1.id, amount: 10 };
    const jackpot2 = { game: game2.id, amount: 20 };
    const jackpotServerResponse1: JackpotDto[] = [jackpot1, jackpot2];

    // When I fetch games with jackpot category

    service.gamesByCategories([GameCategory.JACKPOT])
      .pipe(take(1))
      .subscribe(games => result = games);

    // Then games with jackpots were returned

    httpMock.expectOne({ method: 'GET', url: GAME_ENDPOINTS.GAMES }).flush(gameServerResponse);
    httpMock.expectOne({ method: 'GET', url: JACKPOT_ENDPOINTS.JACKPOTS }).flush(jackpotServerResponse1);
    tick();

    assertGames(result, [
      { id: game1.id, jackpot: jackpot1.amount },
      { id: game2.id, jackpot: jackpot2.amount }
    ]);
  }));
});

function gameDtoMock(props: Partial<GameDto>): GameDto {
  return {
    categories: [],
    image: 'image',
    name: 'name',
    id: 'id',
    ...props
  };
}

function assertGames(actual: Game[], expected: Pick<Game, 'id' | 'jackpot'>[]) {
  actual.forEach((game, index) => {
    expect(game.id).toEqual(expected[index].id);
    expect(game.jackpot).toEqual(expected[index].jackpot);
  });
}
