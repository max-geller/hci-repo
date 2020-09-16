import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstimatesRoutingModule } from './estimates-routing.module';
import { EstimateListComponent } from './pages/estimate-list/estimate-list.component';
import { EstimateDetailComponent } from './pages/estimate-detail/estimate-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { PowerBiComponent } from './power-bi/power-bi.component';


@NgModule({
  declarations: [
    EstimateListComponent,
    EstimateDetailComponent,
    PowerBiComponent
  ],
  imports: [
    CommonModule,
    EstimatesRoutingModule,
    SharedModule,
    CoreModule,
  ]
})
export class EstimatesModule { }
