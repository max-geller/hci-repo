import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorListComponent } from './pages/contractor-list/contractor-list.component';
import { ContractorDetailComponent } from './pages/contractor-detail/contractor-detail.component';
import { ContractorsRoutes } from './contractors.routes';



@NgModule({
  declarations: [
    ContractorListComponent,
    ContractorDetailComponent],
  imports: [
    CommonModule,
    ContractorsRoutes
  ]
})
export class ContractorsModule { }
