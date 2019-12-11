import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppStepOneComponent } from './create-app-step-one.component';

describe('CreateAppStepOneComponent', () => {
  let component: CreateAppStepOneComponent;
  let fixture: ComponentFixture<CreateAppStepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAppStepOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
