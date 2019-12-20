import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DetailRoutingModule } from './detail-routing.module';

import { DetailComponent } from './detail.component';

import { DetailService } from './detail.service';

@NgModule({
  declarations: [DetailComponent],
  providers: [DetailService],
  imports: [CommonModule, DetailRoutingModule, SharedModule],
})
export class DetailModule {}
