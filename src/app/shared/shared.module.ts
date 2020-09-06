import { NgAisModule } from 'angular-instantsearch';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './vendors/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDeleteComponent } from './components/modals/confirm-delete/confirm-delete.component';
import { AgmCoreModule } from '@agm/core';
import { GoogleChartsModule } from 'angular-google-charts';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgAisModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts,
    }),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCYTxkREIgB7sNozUDIhlVNNDwXg9SS3wk' }),
    GoogleChartsModule

  ],
  declarations: [
    ConfirmDeleteComponent,

  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule,
    GoogleChartsModule,
    NgxEchartsModule,
    NgAisModule
  ]
})
export class SharedModule { }
