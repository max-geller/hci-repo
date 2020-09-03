import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, ActivatedRouteSnapshot, Route, RouterStateSnapshot } from '@angular/router';
import { map, tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {

  }

  canActivate(next, state): Observable<boolean> {
    return this.auth.user$.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        console.log('access denied');
        this.router.navigate(['auth/sessions/login']);
      })
    );
  }
}
