
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { FirstUseService } from './helpers/first-use.service';
import { CookieService } from './helpers/cookie.service';
import { AvatarService } from './helpers/avatar.service';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AvatarService,
    CookieService,
    FirstUseService,
    UserService
],
})
export class CoreModule { }
