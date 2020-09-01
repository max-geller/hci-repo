import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './vendors/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { ConfirmDeleteComponent } from './components/modals/confirm-delete/confirm-delete.component';
import { NgxGalleryModule } from 'ngx-gallery';

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
//    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCYTxkREIgB7sNozUDIhlVNNDwXg9SS3wk' }),
    NgxPageScrollCoreModule.forRoot({ duration: 800 }),
    NgxPageScrollModule,
    NgxChartsModule,
    NgxUIModule,
    BubbleChartInteractiveModule,
    SliderModule,
    NgxGalleryModule
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
//    AgmCoreModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    NgxChartsModule,
    NgxUIModule,
    BubbleChartInteractiveModule,
    SliderModule,
    NgxGalleryModule
  ]
})
export class SharedModule { }
