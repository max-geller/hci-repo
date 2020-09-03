import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-database-table',
  templateUrl: './database-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatabaseTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
