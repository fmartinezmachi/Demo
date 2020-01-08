import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CustomFormModule } from '../custom-form/custom-form.module';

// Components
import { AccordionComponent } from './components/accordion/accordion.component';
import { CardComponent } from './components/card/card.component';
import { CreateAppModalComponent } from './components/create-app-modal/create-app-modal.component';
import { CreateAppStepOneComponent } from './components/create-app-modal/create-app-step-one/create-app-step-one.component';
import { ComponentCardComponent } from './components/component-card/component-card.component';
import { InputSelectComponentComponent } from './components/input-select-component/input-select-component.component';
import { CreateAppStepTwoComponent } from './components/create-app-modal/create-app-step-two/create-app-step-two.component';
import { SearcherComponent } from './components/create-app-modal/searcher/searcher.component';
import { ModalComponent } from './components/modal/modal.component';
import { SelectableListComponent } from './components/selectable-list/selectable-list.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { FilterOrderComponent } from './components/filter-order/filter-order.component';
import { FilterTechnologyComponent } from './components/filter-technology/filter-technology.component';
import { TechIconComponent } from './components/tech-icon/tech-icon.component';
import { AppListComponent } from './components/app-list/app-list.component';

// Pipes
import { SafePipe } from './pipes/safe.pipe';
import { ReversePipe } from './pipes/reverse.pipe';

import { ModalService } from './components/modal/modal.service';
import { LoaderComponent } from './components/loader/loader.component';

const components = [
  AccordionComponent,
  CardComponent,
  CreateAppModalComponent,
  ModalComponent,
  StepperComponent,
  ComponentCardComponent,
  SelectableListComponent,
  InputSelectComponentComponent,
  CreateAppStepTwoComponent,
  CreateAppStepOneComponent,
  ComponentCardComponent,
  InputSelectComponentComponent,
  LoaderComponent,
  SelectableListComponent,
  StepperComponent,
  SearcherComponent,
  FilterOrderComponent,
  FilterTechnologyComponent,
  TechIconComponent,
  AppListComponent,
];

const exports = [
  AccordionComponent,
  ComponentCardComponent,
  CardComponent,
  CreateAppModalComponent,
  CreateAppStepTwoComponent,
  InputSelectComponentComponent,
  LoaderComponent,
  ModalComponent,
  SelectableListComponent,
  StepperComponent,
  FilterOrderComponent,
  FilterTechnologyComponent,
  TechIconComponent,
  AppListComponent,
  AngularSvgIconModule,
  SafePipe,
];

@NgModule({
  declarations: [...components, SafePipe, ReversePipe],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormModule,
  ],
  providers: [ModalService],
  exports,
})
export class SharedModule {}
