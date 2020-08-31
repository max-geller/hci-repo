import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorListComponent } from './pages/contractor-list/contractor-list.component';
import { ContractorDetailComponent } from './pages/contractor-detail/contractor-detail.component';



@NgModule({
  declarations: [ContractorListComponent, ContractorDetailComponent],
  imports: [
    CommonModule
  ]
})
export class ContractorsModule { }
