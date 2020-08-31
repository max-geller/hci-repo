import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDetailComponent } from './pages/client-detail/client-detail.component';
import { ClientListComponent } from './pages/client-list/client-list.component';



@NgModule({
  declarations: [ClientDetailComponent, ClientListComponent],
  imports: [
    CommonModule
  ]
})
export class ClientsModule { }
