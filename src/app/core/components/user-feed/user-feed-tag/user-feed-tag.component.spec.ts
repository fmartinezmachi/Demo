import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeedTagComponent } from './user-feed-tag.component';
import { UserFeedTag } from './user-feed-tag';
import { TagType } from '@coreModels/tag-type';

describe('UserFeedTagComponent', () => {
  let component: UserFeedTagComponent;
  let fixture: ComponentFixture<UserFeedTagComponent>;
  const tag: UserFeedTag = {
    label1: { text: '', type: TagType.Success },
    label2: { text: '', type: TagType.Warn },
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserFeedTagComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFeedTagComponent);
    component = fixture.componentInstance;
    component.tag = tag;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
