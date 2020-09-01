import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array';

import { colorSets } from '@swimlane/ngx-charts/utils/color-sets';
import { formatLabel, escapeLabel } from '@swimlane/ngx-charts/common/label.helper';
import {
  single,
  multi,
  bubble,
  generateData,
  generateGraph,
  treemap,
  timelineFilterBarData,
  fiscalYearReport
} from './data';
import { bubbleDemoData } from './custom-charts/bubble-chart-interactive/data';
import { BubbleChartInteractiveServerDataModel } from './custom-charts/bubble-chart-interactive/models';
import { data as countries } from 'emoji-flags';
import chartGroups from './chartTypes';
import { barChart, lineChartSeries } from './combo-chart-data';
import { version } from '../../projects/swimlane/ngx-charts/package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => { this.spinner.hide(); }, 2000);
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}


