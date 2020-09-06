import { Component, OnInit, Input, Inject, ViewEncapsulation } from '@angular/core';
import {
  animate, AnimationEvent,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Observable, of } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { AuthService } from './../../../../core/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

export type FadeState = 'visible' | 'hidden';



@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',

})

export class AuthLayoutComponent implements OnInit {





  user$: Observable<firebase.User>;
  // tslint:disable-next-line: variable-name



  constructor(public auth: AuthService, private spinner: NgxSpinnerService, @Inject(DOCUMENT) private document: Document,
  ) {
    this.user$ = this.auth.userStatus();
  }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => { this.spinner.hide(); }, 2000);
  }

  get isAuthenticated(): boolean {
    return this.auth.isAuthenticated;
  }

  showSpinner(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}