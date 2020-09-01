import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './vendors/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { ConfirmDeleteComponent } from './components/modals/confirm-delete/confirm-delete.component';

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxChartsModule } from '@swimlane/ngx-charts/ngx-charts.module';
import { NgxUIModule, SliderModule } from '@swimlane/ngx-ui';
import { BubbleChartInteractiveModule } from './../custom-charts/bubble-chart-interactive';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    NgxPageScrollCoreModule.forRoot({ duration: 800 }),
    NgxPageScrollModule,
    NgxChartsModule,
    NgxUIModule,
    BubbleChartInteractiveModule,
  ],
  declarations: [
    ConfirmDeleteComponent

  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    NgxChartsModule,
    NgxUIModule,
    BubbleChartInteractiveModule,
  ]
})
export class SharedModule { }
