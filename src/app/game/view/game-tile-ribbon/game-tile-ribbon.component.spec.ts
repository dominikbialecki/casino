import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTileRibbonComponent } from './game-tile-ribbon.component';

describe('GameTileRibbonComponent', () => {
  let component: GameTileRibbonComponent;
  let fixture: ComponentFixture<GameTileRibbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameTileRibbonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTileRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
