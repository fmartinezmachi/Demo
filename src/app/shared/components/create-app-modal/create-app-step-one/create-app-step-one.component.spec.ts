import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { CreateAppStepOneComponent } from './create-app-step-one.component';
import { InputFileComponent } from 'src/app/custom-form/input-file/input-file.component';
import { InputRadioComponent } from 'src/app/custom-form/input-radio-group/input-radio/input-radio.component';
import { InputTextComponent } from 'src/app/custom-form/input-text/input-text.component';
import { InputRadioGroupComponent } from 'src/app/custom-form/input-radio-group/input-radio-group.component';

describe('CreateAppStepOneComponent', () => {
  let component: CreateAppStepOneComponent;
  let fixture: ComponentFixture<CreateAppStepOneComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        CreateAppStepOneComponent,
        InputRadioGroupComponent,
        InputRadioComponent,
        InputFileComponent,
        InputTextComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppStepOneComponent);
    component = fixture.componentInstance;
    component.formRef = formBuilder.group({ projectTechnology: [''], urlImage: [''] });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
