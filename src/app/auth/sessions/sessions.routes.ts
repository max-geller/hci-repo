import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ResetPassComponent } from './pages/reset-pass/reset-pass.component';
import { SetupComponent } from './pages/setup/setup.component';
import { SignupComponent } from './pages/signup/signup.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { CheckEmailComponent } from './pages/check-email/check-email.component';
import { DownloadComponent } from './pages/download/download.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reset-pass',
    component: ResetPassComponent
  },
  {
    path: 'setup',
    component: SetupComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'verify',
    component: VerifyComponent
  },
  {
    path: 'confirm',
    component: CheckEmailComponent
  },
  {
    path: 'download',
    component: DownloadComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutes { }
