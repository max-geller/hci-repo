import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ResetPassComponent } from './pages/reset-pass/reset-pass.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { SetupComponent } from './pages/setup/setup.component';
import { SessionsRoutes } from './sessions.routes';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { SetupFormComponent } from './pages/setup/setup-form/setup-form.component';
import { SetupStepperComponent } from './pages/setup/setup-stepper/setup-stepper.component';
import { AvatarModule } from 'ngx-avatar';
import { CheckEmailComponent } from './pages/check-email/check-email.component';
import { DownloadComponent } from './pages/download/download.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetPassComponent,
    VerifyComponent,
    SetupComponent,
    SetupFormComponent,
    SetupStepperComponent,
    CheckEmailComponent,
    DownloadComponent,
  ],
  imports: [
    CommonModule,
    SessionsRoutes,
    RouterModule,
    CoreModule,
    SharedModule,
    AvatarModule
  ]
})
export class SessionsModule { }
