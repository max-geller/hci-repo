import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-setup-form',
  templateUrl: './setup-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetupFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
