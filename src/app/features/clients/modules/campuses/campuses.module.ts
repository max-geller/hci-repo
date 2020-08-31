import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampusListComponent } from './pages/campus-list/campus-list.component';
import { CampusDetailComponent } from './pages/campus-detail/campus-detail.component';



@NgModule({
  declarations: [CampusListComponent, CampusDetailComponent],
  imports: [
    CommonModule
  ]
})
export class CampusesModule { }
