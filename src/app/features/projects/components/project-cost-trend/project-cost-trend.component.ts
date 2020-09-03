import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from './../../../../shared/vendors/echart/echart-styles';

@Component({
  selector: 'app-project-cost-trend',
  templateUrl: './project-cost-trend.component.html',
  styleUrls: ['./project-cost-trend.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ProjectCostTrendComponent implements OnInit {

  constructor() { }
  chartLineOption3: EChartOption;
  ngOnInit(): void {
    this.chartLineOption3 = {
      ...echartStyles.lineNoAxis, ...{
        series: [{
          data: [40, 80, 20, 90, 30, 80, 40, 90, 20, 80, 30, 45, 50, 110, 90, 145, 120, 135, 120, 140],
          lineStyle: {
            color: 'rgba(4,70,120,0.2)',
            width: 3,
            ...echartStyles.lineShadow
          },
          label: { show: true, color: '#212121' },
          type: 'line',
          smooth: true,
          itemStyle: {
            borderColor: 'rgba(102, 51, 153, 1)'
          }
        }]
      }
    };
  }

}
