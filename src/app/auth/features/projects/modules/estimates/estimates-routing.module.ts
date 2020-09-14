import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimateListComponent } from './pages/estimate-list/estimate-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '',
    component: EstimateListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimatesRoutingModule { }
