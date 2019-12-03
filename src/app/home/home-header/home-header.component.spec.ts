import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMenuComponent } from 'src/app/shared/components/action-menu/action-menu.component';
import { HomeHeaderComponent } from './home-header.component';
import { IconGroupComponent } from 'src/app/shared/components/icon-group/icon-group.component';

describe('HomeHeaderComponent', () => {
  let component: HomeHeaderComponent;
  let fixture: ComponentFixture<HomeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionMenuComponent, HomeHeaderComponent, IconGroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
