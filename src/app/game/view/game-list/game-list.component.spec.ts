import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { Game } from '../../domain/game';
import { GameFacadeService } from '../../domain/game-facade.service';
import { GameTileComponent } from '../game-tile/game-tile.component';

import { GameListComponent } from './game-list.component';

class GameFacadeMock implements Pick<GameFacadeService, 'gamesByCategory'> {

  static GAMES = [
    gameMock({ image: 'url1' }),
    gameMock({ image: 'url2' }),
    gameMock({ image: 'url3' })
  ];

  gamesByCategory(): Observable<Game[]> {
    return of(GameFacadeMock.GAMES);
  }
}

describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameListComponent, GameTileComponent],
      providers: [
        { provide: GameFacadeService, useClass: GameFacadeMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a tile for each fetched game', fakeAsync(() => {
    // given there is no game tiles
    let tiles = fixture.debugElement.queryAll(By.directive(GameTileComponent));
    expect(tiles).toHaveSize(0);

    // when games were fetched
    tick();
    fixture.detectChanges();

    // then a tile for each game was displayed
    tiles = fixture.debugElement.queryAll(By.directive(GameTileComponent));
    expect(tiles).toHaveSize(GameFacadeMock.GAMES.length);
  }));
});

export function gameMock(props: Partial<Game>): Game {
  return new Game({
    categories: [],
    image: 'image',
    name: 'name',
    id: 'id',
    ...props
  });
}
