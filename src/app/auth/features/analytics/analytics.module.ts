import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsDashboardComponent } from './pages/analytics-dashboard/analytics-dashboard.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [

  AnalyticsDashboardComponent
],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AnalyticsRoutingModule,

  ]
})
export class AnalyticsModule { }
