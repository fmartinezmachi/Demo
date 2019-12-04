import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AccordionComponent } from './components/accordion/accordion.component';
import { CreateAppModalComponent } from './components/create-app-modal/create-app-modal.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

// Pipes
import { SafePipe } from './pipes/safe.pipe';

import { ModalService } from './components/modal/modal.service';
import { ReversePipe } from './pipes/reverse.pipe';

const components = [AccordionComponent, CreateAppModalComponent, ModalComponent];

const exports = [
  AccordionComponent,
  CreateAppModalComponent,
  ModalComponent,
  SafePipe,
  AngularSvgIconModule,
];

@NgModule({
  declarations: [...components, SafePipe, ReversePipe],
  imports: [CommonModule, HttpClientModule, AngularSvgIconModule, ReactiveFormsModule],
  providers: [ModalService],
  exports,
})
export class SharedModule {}
