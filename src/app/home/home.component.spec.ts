import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AccordionComponent } from '../shared/components/accordion/accordion.component';
import { CardComponent } from '../shared/components/card/card.component';
import { CreateAppModalComponent } from '../shared/components/create-app-modal/create-app-modal.component';
import { CreateAppStepTwoComponent } from '../shared/components/create-app-modal/create-app-step-two/create-app-step-two.component';
import { CreateAppStepOneComponent } from '../shared/components/create-app-modal/create-app-step-one/create-app-step-one.component';
import { ComponentCardComponent } from '../shared/components/component-card/component-card.component';
import { InputFileComponent } from '../custom-form/input-file/input-file.component';
import { InputRadioComponent } from '../custom-form/input-radio-group/input-radio/input-radio.component';
import { InputRadioGroupComponent } from '../custom-form/input-radio-group/input-radio-group.component';
import { InputSelectComponentComponent } from '../shared/components/input-select-component/input-select-component.component';
import { InputTextComponent } from '../custom-form/input-text/input-text.component';
import { HomeComponent } from './home.component';
import { LoaderComponent } from '../shared/components/loader/loader.component';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { SelectableListComponent } from '../shared/components/selectable-list/selectable-list.component';
import { StepperComponent } from '../shared/components/stepper/stepper.component';
import { SearcherComponent } from '../shared/components/create-app-modal/searcher/searcher.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, ReactiveFormsModule, HttpClientModule],
      declarations: [
        AccordionComponent,
        CardComponent,
        ComponentCardComponent,
        CreateAppModalComponent,
        CreateAppStepOneComponent,
        CreateAppStepTwoComponent,
        HomeComponent,
        InputFileComponent,
        InputSelectComponentComponent,
        InputRadioGroupComponent,
        InputRadioComponent,
        InputTextComponent,
        LoaderComponent,
        ModalComponent,
        SearcherComponent,
        SelectableListComponent,
        StepperComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
