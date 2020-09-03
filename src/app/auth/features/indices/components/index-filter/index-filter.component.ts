import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-index-filter',
  templateUrl: './index-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
