import { ChartCommonModule } from './../../../lib/common/chart-common.module';
import { NgModule } from '@angular/core';
import { BubbleChartInteractiveComponent } from './bubble-chart-interactive.component';
import { BubbleSeriesInteractiveComponent } from './bubble-series-interactive.component';

export { BubbleChartInteractiveComponent, BubbleSeriesInteractiveComponent };

@NgModule({
  imports: [ChartCommonModule],
  declarations: [BubbleChartInteractiveComponent, BubbleSeriesInteractiveComponent],
  exports: [BubbleChartInteractiveComponent, BubbleSeriesInteractiveComponent]
})
export class BubbleChartInteractiveModule {}
