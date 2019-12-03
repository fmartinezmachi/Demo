import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressComponent } from './progress/progress.component';
import { UserFeedComponent } from './user-feed.component';
import { UserFeedTagComponent } from './user-feed-tag/user-feed-tag.component';

describe('UserFeedComponent', () => {
  let component: UserFeedComponent;
  let fixture: ComponentFixture<UserFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressComponent, UserFeedComponent, UserFeedTagComponent],
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
