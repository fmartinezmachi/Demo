import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeedComponent } from './user-feed.component';
import { UserFeedTagComponent } from './user-feed-tag/user-feed-tag.component';

describe('UserFeedComponent', () => {
  let component: UserFeedComponent;
  let fixture: ComponentFixture<UserFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserFeedComponent, UserFeedTagComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
