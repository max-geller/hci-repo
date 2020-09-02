import { Component, OnInit, Input, Inject } from '@angular/core';
import {
  animate,
  AnimationEvent,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { AuthService } from './../../../core/services/auth.service';
import { Observable, of } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import algoliasearch from 'algoliasearch/lite';
export type FadeState = 'visible' | 'hidden';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
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



export class NavbarComponent {
  config = {
    indexName: 'instant_search',
    searchClient: algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76'),
  }

  user$: Observable<firebase.User>;
  isAuthenticated: boolean;
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

  animationDone(event: AnimationEvent) {
    if (event.fromState === 'visible' && event.toState === 'hidden') {
      this._show = false;
    }
  }

  public buttonName: any = 'Show';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public auth: AuthService,
  ) {
    this.user$ = this.auth.userStatus();
  }



  toggleSearch(): void {
    this.show = !this.show;
  }

}
