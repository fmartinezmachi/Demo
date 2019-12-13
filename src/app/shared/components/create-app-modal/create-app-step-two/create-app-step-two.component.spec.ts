import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppStepTwoComponent } from './create-app-step-two.component';

describe('CreateAppStepTwoComponent', () => {
  let component: CreateAppStepTwoComponent;
  let fixture: ComponentFixture<CreateAppStepTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAppStepTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
