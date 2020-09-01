import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  constructor(public authService: AuthService, private spinner: NgxSpinnerService,) {
  }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => { this.spinner.hide(); }, 2000);
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  showSpinner(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}