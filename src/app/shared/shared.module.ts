import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { ActionMenuComponent } from './components/action-menu/action-menu.component';
import { AditionalContentComponent } from './components/aditional-content/aditional-content.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CreateAppModalComponent } from './components/create-app-modal/create-app-modal.component';
import { IconGroupComponent } from './components/icon-group/icon-group.component';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';
import { LearnMoreIconComponent } from './components/learn-more/learn-more-icon/learn-more-icon.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { PageMenuComponent } from './components/page-menu/page-menu.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

// Pipes
import { SafePipe } from './pipes/safe.pipe';

import { ModalService } from './components/modal/modal.service';
import { ReversePipe } from './pipes/reverse.pipe';

const components = [
  AccordionComponent,
  ActionMenuComponent,
  AditionalContentComponent,
  CreateAppModalComponent,
  IconGroupComponent,
  LearnMoreComponent,
  LearnMoreIconComponent,
  ModalComponent,
  NavMenuComponent,
  PageMenuComponent,
  SearchInputComponent,
  TableComponent,
];

const exports = [
  AccordionComponent,
  ActionMenuComponent,
  AditionalContentComponent,
  CreateAppModalComponent,
  IconGroupComponent,
  LearnMoreComponent,
  ModalComponent,
  NavMenuComponent,
  PageMenuComponent,
  SafePipe,
  SearchInputComponent,
  TableComponent,
  AngularSvgIconModule,
];

@NgModule({
  declarations: [...components, SafePipe, ReversePipe],
  imports: [CommonModule, HttpClientModule, AngularSvgIconModule, ReactiveFormsModule],
  providers: [ModalService],
  exports,
})
export class SharedModule {}
