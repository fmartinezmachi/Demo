import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { PageMenuComponent } from './page-menu.component';
import { SearchInputComponent } from '../search-input/search-input.component';

describe('PageMenuComponent', () => {
  let component: PageMenuComponent;
  let fixture: ComponentFixture<PageMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageMenuComponent, NavMenuComponent, SearchInputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
