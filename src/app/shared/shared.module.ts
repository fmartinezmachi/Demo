import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';

// Components
import { AccordionComponent } from './components/accordion/accordion.component';
import { CreateAppModalComponent } from './components/create-app-modal/create-app-modal.component';
import { ModalComponent } from './components/modal/modal.component';
import { StepsComponent } from './components/steps/steps.component';

// Pipes
import { SafePipe } from './pipes/safe.pipe';
import { ReversePipe } from './pipes/reverse.pipe';

import { ModalService } from './components/modal/modal.service';

const components = [AccordionComponent, CreateAppModalComponent, ModalComponent, StepsComponent];

const exports = [
  AccordionComponent,
  AngularSvgIconModule,
  CreateAppModalComponent,
  ModalComponent,
  StepsComponent,
  SafePipe,
];

@NgModule({
  declarations: [...components, SafePipe, ReversePipe],
  imports: [CommonModule, HttpClientModule, AngularSvgIconModule, ReactiveFormsModule],
  providers: [ModalService],
  exports,
})
export class SharedModule {}
