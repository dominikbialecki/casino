import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of, take } from 'rxjs';
import { Game } from '../../domain/game';
import { GameCategory } from '../../domain/game-category';
import { GameFacadeService } from '../../domain/game-facade.service';
import { GameListRouteData } from '../../game-routing.module';
import { gameMock } from '../../test-utils/game-mock';

import { GameListContainerComponent } from './game-list-container.component';

describe('GameListContainerComponent', () => {
  let component: GameListContainerComponent;
  let fixture: ComponentFixture<GameListContainerComponent>;
  let facadeSpy: jasmine.SpyObj<GameFacadeService>;

  const ROUTE_DATA: GameListRouteData = { categories: [GameCategory.JACKPOT] };
  const GAMES: Game[] = [gameMock({ id: '1', categories: [GameCategory.JACKPOT] })];

  beforeEach(async () => {
    facadeSpy = jasmine.createSpyObj('GameFacadeService', ['gamesByCategories']);

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

  it('should retrieve data', fakeAsync(() => {
    // given
    let result: GameListRouteData = {} as GameListRouteData;

    // when
    component.data$.subscribe(data => result = data);
    tick();

    // then
    expect(result).toEqual(ROUTE_DATA);
  }));

  it('should fetch games by category', fakeAsync(() => {
    // given
    let result: Game[] = [];
    facadeSpy.gamesByCategories.and.returnValue(of(GAMES));

    // when
    component.games$.pipe(take(1)).subscribe(games => result = games);
    tick();
    fixture.detectChanges();

    // then
    expect(facadeSpy.gamesByCategories).toHaveBeenCalledWith(ROUTE_DATA.categories);
    expect(result).toEqual(GAMES);
  }));
});
