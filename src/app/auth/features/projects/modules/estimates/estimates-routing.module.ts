import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimateListComponent } from './pages/estimate-list/estimate-list.component';
import { PowerBiComponent } from './power-bi/power-bi.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: EstimateListComponent
  },
  {
    path: 'power-bi',
    component: PowerBiComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimatesRoutingModule { }
