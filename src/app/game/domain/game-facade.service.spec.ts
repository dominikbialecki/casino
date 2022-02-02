import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { GAME_ENDPOINTS } from '../config/game.endpoints';
import { Game } from './game';

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

  it('should provide games', fakeAsync(() => {
    let result: Game[] = [];
    let searchedCategory = 'new';

    // Given server contains games with various categories

    const game1 = gameDtoMock({ id: '1', categories: [] });
    const game2 = gameDtoMock({ id: '1', categories: ['newly'] });
    const game3 = gameDtoMock({ id: '2', categories: ['new', 'top'] });
    const game4 = gameDtoMock({ id: '3', categories: ['top'] });
    const game5 = gameDtoMock({ id: '4', categories: ['new'] });
    const serverResponse: GameDto[] = [game1, game2, game3, game4, game5];

    // When I fetch games with given category

    service.gamesByCategory(searchedCategory).subscribe(games => result = games);

    // Then games were returned

    expect(result).toHaveSize(0);
    httpMock.expectOne({ method: 'GET', url: GAME_ENDPOINTS.GAMES }).flush(serverResponse);
    tick();
    expect(result).toEqual(toExpectedGames([game3, game5]));
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

function toExpectedGames(serverResponse: GameDto[]) {
  return serverResponse.map(game => jasmine.objectContaining(game));
}
