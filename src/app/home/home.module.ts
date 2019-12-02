import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeFiltersComponent } from './home-filters/home-filters.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeService } from './home.service';

@NgModule({
  declarations: [HomeComponent, HomeFiltersComponent, HomeHeaderComponent],
  imports: [CommonModule, HomeRoutingModule, HttpClientModule, SharedModule, ReactiveFormsModule],
  providers: [HomeService],
})
export class HomeModule {}
