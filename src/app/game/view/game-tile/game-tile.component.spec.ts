import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Game } from '../../domain/game';

import { GameTileComponent } from './game-tile.component';

describe('GameTileComponent', () => {
  let component: GameTileComponent;
  let fixture: ComponentFixture<GameTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameTileComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTileComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.game = {} as Game;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
