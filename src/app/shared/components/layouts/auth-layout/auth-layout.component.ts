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
import algoliasearch from 'algoliasearch/lite';

export type FadeState = 'visible' | 'hidden';



@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  animations: [
    trigger('state', [
      state(
        'visible',
        style({
          opacity: '1'
        })
      ),
      state(
        'hidden',
        style({
          opacity: '0'
        })
      ),
      transition('* => visible', [animate('500ms ease-out')]),
      transition('visible => hidden', [animate('500ms ease-out')])
    ])
  ],
})

export class AuthLayoutComponent implements OnInit {

  projectSearchConfig = {
    indexName: 'PROJECT',
    searchClient: algoliasearch('8K7V4TARGD', 'f4c1889dd27c98bebcaf99eb1e3c5fc2'),
    hitsPerPage: 8,
  };
  taskSearchConfig = {
    indexName: 'TASK',
    searchClient: algoliasearch('8K7V4TARGD', 'f4c1889dd27c98bebcaf99eb1e3c5fc2'),
    hitsPerPage: 8,
  };



  user$: Observable<firebase.User>;
  state: FadeState;
  // tslint:disable-next-line: variable-name
  private _show: boolean;
  get show() {
    return this._show;
  }
  @Input()
  set show(value: boolean) {
    if (value) {
      this._show = value;
      this.state = 'visible';
    } else {
      this.state = 'hidden';
    }
  }

  animationDone(event: AnimationEvent): any {
    if (event.fromState === 'visible' && event.toState === 'hidden') {
      this._show = false;
    }
  }



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



  toggleSearch(): void {
    this.show = !this.show;
  }
}