import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UiNavbarItem } from './ui-navbar-item';

import { UiNavbarComponent } from './ui-navbar.component';

describe('UiNavbarComponent', () => {
  let component: UiNavbarComponent;
  let fixture: ComponentFixture<UiNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiNavbarComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiNavbarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display a link for each provided item', () => {
    // given I have navbar items
    const ITEMS: UiNavbarItem[] = [
      { label: 'label1', redirectUrl: 'link1' },
      { label: 'label2', redirectUrl: 'link2' },
      { label: 'label3', redirectUrl: 'link3' }
    ];
    component.items = ITEMS;

    // when I provide items
    component.items = ITEMS;
    fixture.detectChanges();

    // then links were displayed
    const links = fixture.debugElement.queryAll(By.css('a'));
    expect(links).toHaveSize(ITEMS.length);
    links.forEach((linkDebugElement, index) => {
      expect(linkDebugElement.nativeElement.text).toContain(ITEMS[index].label);
    });

  });
});
