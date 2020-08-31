import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RateDashboardComponent } from './pages/rate-dashboard/rate-dashboard.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: RateDashboardComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatesRoutes { }
