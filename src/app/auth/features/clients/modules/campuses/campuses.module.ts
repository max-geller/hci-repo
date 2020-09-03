import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampusListComponent } from './pages/campus-list/campus-list.component';
import { CampusDetailComponent } from './pages/campus-detail/campus-detail.component';
import { CampusesRoutes } from './campuses.routes';



@NgModule({
  declarations: [CampusListComponent, CampusDetailComponent],
  imports: [
    CommonModule,
    CampusesRoutes
  ]
})
export class CampusesModule { }
