import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreIconComponent } from './learn-more-icon.component';

describe('LearnMoreIconComponent', () => {
  let component: LearnMoreIconComponent;
  let fixture: ComponentFixture<LearnMoreIconComponent>;
  const mockData = {
    color: 'red',
    icon: 'red',
    link: 'red',
    text: 'red',
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LearnMoreIconComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMoreIconComponent);
    component = fixture.componentInstance;
    component.data = mockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
