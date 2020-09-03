import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatesRoutes } from './rates.routes';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { RateDashboardComponent } from './pages/rate-dashboard/rate-dashboard.component';
import { ChartComponent } from './components/chart/chart.component';


@NgModule({
  declarations: [
    RateDashboardComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,
    RatesRoutes,
    RouterModule,
    SharedModule,
    CoreModule
  ]
})
export class RatesModule { }
