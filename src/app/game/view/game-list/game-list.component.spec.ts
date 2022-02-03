import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GameCategory } from '../../domain/game-category';
import { gameMock } from '../../test-utils/game-mock';
import { GameTileComponent } from '../game-tile/game-tile.component';

import { GameListComponent } from './game-list.component';

describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameListComponent, GameTileComponent],
      schemas: [NO_ERRORS_SCHEMA]
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
    const GAMES = [
      gameMock({ image: 'url1', isNew: true }),
      gameMock({ image: 'url2', isNew: true }),
      gameMock({ image: 'url3', isNew: true })
    ];

    // given there is no game tiles
    let tiles = fixture.debugElement.queryAll(By.directive(GameTileComponent));
    expect(tiles).toHaveSize(0);

    // when games were fetched
    component.games = GAMES;
    tick();
    fixture.detectChanges();

    // then a tile for each game was displayed
    tiles = fixture.debugElement.queryAll(By.directive(GameTileComponent));
    expect(tiles).toHaveSize(GAMES.length);
  }));

  it('should enable "new" ribbon when game is new', fakeAsync(() => {
    // given there is a new game
    component.games = [gameMock({ image: 'url1', categories: [GameCategory.NEW], isNew: true })];

    // when tile is rendered
    fixture.detectChanges();
    const tile = fixture.debugElement.query(By.directive(GameTileComponent));
    expect(tile).toBeTruthy();

    // then game has "new" ribbon
    expect(tile.componentInstance.newRibbon).toBeTrue();
  }));

  it('should disable "new" ribbon when game is new but ribbon is disabled on list level', fakeAsync(() => {
    // given there is a new game
    component.games = [gameMock({ image: 'url1', categories: [GameCategory.NEW], isNew: true })];

    // and new game ribbons are disabled
    component.disableNewRibbon = true;

    // when tile is rendered
    fixture.detectChanges();
    const tile = fixture.debugElement.query(By.directive(GameTileComponent));
    expect(tile).toBeTruthy();

    // then game has "new" ribbon
    expect(tile.componentInstance.newRibbon).toBeFalse();
  }));
});


