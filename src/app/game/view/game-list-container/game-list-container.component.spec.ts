import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Game } from '../../domain/game';
import { GameCategory } from '../../domain/game-category';
import { GameFacadeService } from '../../domain/game-facade.service';
import { GameListRouteData } from '../../game-routing.module';

import { GameListContainerComponent } from './game-list-container.component';

describe('GameListContainerComponent', () => {
  let component: GameListContainerComponent;
  let fixture: ComponentFixture<GameListContainerComponent>;
  let facadeSpy: jasmine.SpyObj<GameFacadeService>;

  const ROUTE_DATA: GameListRouteData = { categories: [GameCategory.JACKPOT] };
  const GAMES: Game[] = [gameMock({ id: '1', categories: [GameCategory.JACKPOT] })];

  beforeEach(async () => {
    facadeSpy = jasmine.createSpyObj('GameFacadeService', ['gamesByCategory']);

    await TestBed.configureTestingModule({
      declarations: [GameListContainerComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: GameFacadeService, useValue: facadeSpy },
        { provide: ActivatedRoute, useValue: { data: of(ROUTE_DATA) } }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve data', (done) => {
    // given
    let result: GameListRouteData | null = null;

    // when
    component.data$.subscribe(result => {

      // then
      expect(result).toEqual(ROUTE_DATA);
      done();
    });

  });

  it('should fetch games by category', fakeAsync(() => {
    // given
    let result: Game[] = [];
    facadeSpy.gamesByCategory.and.returnValue(of(GAMES));

    // when
    component.games$.subscribe(games => result = games);

    // then
    expect(facadeSpy.gamesByCategory).toHaveBeenCalledWith(ROUTE_DATA.categories[0]);
    expect(result).toEqual(GAMES);
  }));
});

export function gameMock(props: Partial<Game>): Game {
  return {
    categories: [],
    image: 'image',
    name: 'name',
    id: 'id',
    isTop: false,
    isNew: false,
    ...props
  };
}
