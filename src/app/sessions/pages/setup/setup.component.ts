import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

import { AvatarModule, AvatarSource } from 'ngx-avatar';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
})

export class SetupComponent {
  email: string;
  password: string;
  constructor(public auth: AuthService,) { }

  emailSignUp(): any {
    this.auth.emailSignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
