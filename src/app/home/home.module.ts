import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { CustomFormModule } from '../custom-form/custom-form.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    CustomFormModule,
  ],
  providers: [HomeService],
})
export class HomeModule {}
