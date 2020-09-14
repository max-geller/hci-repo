import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { ProjectInterface } from './../../../../../core/models/project.model';

import { EChartOption } from 'echarts';
import { echartStyles } from './../../../../../shared/vendors/echart/echart-styles';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
})
export class ProjectDetailComponent implements OnInit {
  public project: ProjectInterface = {
    id: null
  };

  chartLineOption1: EChartOption;
  chartLineOption2: EChartOption;
  chartLineOption3: EChartOption;
  salesChartBar: EChartOption;
  salesChartPie: EChartOption;
  constructor(
    private dataApi: FirestoreService,
    public afs: AngularFirestore,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const idProject = this.route.snapshot.params['id'];
    this.getDetails(idProject);
    console.log(idProject);
    this.chartLineOption1 = {
      ...echartStyles.lineFullWidth, ...{
        series: [{
          data: [30, 40, 20, 50, 40, 80, 90],
          ...echartStyles.smoothLine,
          markArea: {
            label: {
              show: true
            }
          },
          areaStyle: {
            color: 'rgba(4,70,120,0.2)',
            origin: 'start'
          },
          lineStyle: {
            color: '#055C9D',
          },
          itemStyle: {
            color: '#663399'
          }
        }]
      }
    };
    this.chartLineOption2 = {
      ...echartStyles.lineFullWidth, ...{
        series: [{
          data: [30, 10, 40, 10, 40, 20, 90],
          ...echartStyles.smoothLine,
          markArea: {
            label: {
              show: true
            }
          },
          areaStyle: {
            color: 'rgba(255, 193, 7, 0.2)',
            origin: 'start'
          },
          lineStyle: {
            color: '#FFC107'
          },
          itemStyle: {
            color: '#FFC107'
          }
        }]
      }
    };
    this.chartLineOption2.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    this.chartLineOption3 = {
      ...echartStyles.lineNoAxis, ...{
        series: [{
          data: [88, 80, 83, 78],
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

    // this.chartLineOption3.xAxis.data = ['1', '2', '3', 'Thu', 'Fri', 'Sat', 'Sun'];
    this.salesChartBar = {
      legend: {
        borderRadius: 0,
        orient: 'horizontal',
        x: 'right',
        data: ['Actual', 'Budget']
      },
      grid: {
        left: '8px',
        right: '8px',
        bottom: '0',
        containLabel: true
      },
      tooltip: {
        show: true,
        backgroundColor: 'rgba(0, 0, 0, .8)'
      },
      xAxis: [{
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        axisTick: {
          alignWithLabel: true
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: true
        }
      }],
      yAxis: [{
        type: 'value',
        axisLabel: {
          formatter: '${value}'
        },
        min: 0,
        max: 100000,
        interval: 25000,
        axisLine: {
          show: false
        },
        splitLine: {
          show: true,
          interval: 'auto'
        }
      }

      ],

      series: [{
        name: 'Actual',
        data: [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005],
        label: { show: false, color: '#0168c1' },
        type: 'bar',
        barGap: 0,
        color: '#5885AF',
        smooth: true,

      },
      {
        name: 'Budget',
        data: [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050],
        label: { show: false, color: '#639' },
        type: 'bar',
        color: '#003060',
        smooth: true
      }

      ]
    };

    this.salesChartPie = {
      color: ['#003060', '#055C9D', '#465f94', '#68BBE3', '#5885AF', '#41729F'],
      tooltip: {
        show: true,
        backgroundColor: 'rgba(0, 0, 0, .8)'
      },

      xAxis: [{
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      }

      ],
      yAxis: [{
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      }
      ],
      series: [{
        name: 'Cost Per System',
        type: 'pie',
        radius: '75%',
        center: ['50%', '50%'],
        data: [
          { value: 535, name: 'Other' },
          { value: 310, name: 'Mechanical' },
          { value: 234, name: 'Technology' },
          { value: 155, name: 'Plumbing' },
          { value: 130, name: 'Fire Protection' },
          { value: 348, name: 'Electrical' }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
      ]
    };
  }

  getDetails(idProject: string): void {
    this.dataApi.getOneProject(idProject).subscribe(project => {
      this.project = project;
    });
  }
}
