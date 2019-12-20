import { InputRadioGroupComponent } from './../../../custom-form/input-radio-group/input-radio-group.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CreateAppModalComponent } from './create-app-modal.component';
import { ModalComponent } from '../modal/modal.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { CreateAppStepOneComponent } from './create-app-step-one/create-app-step-one.component';
import { CreateAppStepTwoComponent } from './create-app-step-two/create-app-step-two.component';
import { SearcherComponent } from './searcher/searcher.component';
import { StepperComponent } from '../stepper/stepper.component';
import { InputTextComponent } from 'src/app/custom-form/input-text/input-text.component';
import { InputFileComponent } from 'src/app/custom-form/input-file/input-file.component';
import { InputSelectComponentComponent } from '../input-select-component/input-select-component.component';
import { ComponentCardComponent } from '../component-card/component-card.component';
import { SelectableListComponent } from '../selectable-list/selectable-list.component';
import { InputRadioComponent } from 'src/app/custom-form/input-radio-group/input-radio/input-radio.component';

describe('CreateAppModalComponent', () => {
  let component: CreateAppModalComponent;
  let fixture: ComponentFixture<CreateAppModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        AccordionComponent,
        ComponentCardComponent,
        CreateAppModalComponent,
        CreateAppStepOneComponent,
        CreateAppStepTwoComponent,
        InputFileComponent,
        InputSelectComponentComponent,
        InputRadioGroupComponent,
        InputRadioComponent,
        InputTextComponent,
        ModalComponent,
        SearcherComponent,
        SelectableListComponent,
        StepperComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
