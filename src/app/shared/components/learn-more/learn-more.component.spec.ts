import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreComponent } from './learn-more.component';
import { LearnMoreIconComponent } from './learn-more-icon/learn-more-icon.component';

describe('LearnMoreComponent', () => {
  let component: LearnMoreComponent;
  let fixture: ComponentFixture<LearnMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LearnMoreComponent, LearnMoreIconComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
