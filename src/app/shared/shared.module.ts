import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AccordionComponent } from './components/accordion/accordion.component';
import { CreateAppModalComponent } from './components/create-app-modal/create-app-modal.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { StepperComponent } from './components/stepper/stepper.component';
import { ComponentCardComponent } from './component-card/component-card.component';

// Pipes
import { SafePipe } from './pipes/safe.pipe';

import { ModalService } from './components/modal/modal.service';
import { ReversePipe } from './pipes/reverse.pipe';

const components = [AccordionComponent, CreateAppModalComponent, ModalComponent, StepperComponent];

const exports = [
  AccordionComponent,
  CreateAppModalComponent,
  ModalComponent,
  SafePipe,
  AngularSvgIconModule,
  StepperComponent,
  ComponentCardComponent,
];

@NgModule({
  declarations: [...components, SafePipe, ReversePipe, ComponentCardComponent],
  imports: [CommonModule, HttpClientModule, AngularSvgIconModule, ReactiveFormsModule],
  providers: [ModalService],
  exports,
})
export class SharedModule {}
