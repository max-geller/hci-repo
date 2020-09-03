import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampusListComponent } from './pages/campus-list/campus-list.component';
import { CampusDetailComponent } from './pages/campus-detail/campus-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: CampusListComponent
  },
  {
    path: 'campus/:id',
    component: CampusDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampusesRoutes { }
