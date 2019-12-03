import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DetailRoutingModule } from './detail-routing.module';

import { DetailComponent } from './detail.component';
import { DetailHeaderComponent } from './detail-header/detail-header.component';
import { DetailSectionsComponent } from './detail-sections/detail-sections.component';
import { OverviewComponent } from './detail-sections/overview/overview.component';

import { DetailService } from './detail.service';

@NgModule({
  declarations: [
    DetailComponent,
    DetailHeaderComponent,
    DetailSectionsComponent,
    OverviewComponent,
  ],
  providers: [DetailService],
  imports: [CommonModule, DetailRoutingModule, SharedModule],
})
export class DetailModule {}
