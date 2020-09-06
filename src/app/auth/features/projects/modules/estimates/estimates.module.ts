import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstimatesRoutingModule } from './estimates-routing.module';
import { EstimateListComponent } from './pages/estimate-list/estimate-list.component';
import { EstimateDetailComponent } from './pages/estimate-detail/estimate-detail.component';


@NgModule({
  declarations: [EstimateListComponent, EstimateDetailComponent],
  imports: [
    CommonModule,
    EstimatesRoutingModule
  ]
})
export class EstimatesModule { }
