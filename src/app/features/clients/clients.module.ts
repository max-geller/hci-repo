import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDetailComponent } from './pages/client-detail/client-detail.component';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { CampusesModule } from './modules/campuses/campuses.module';
import { ClientsRoutes } from './clients.routes';



@NgModule({
  declarations: [
    ClientDetailComponent,
    ClientListComponent]
  ,
  imports: [
    CommonModule,
    ClientsRoutes,
    CampusesModule,

  ]
})
export class ClientsModule { }
