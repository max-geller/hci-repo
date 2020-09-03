import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDetailComponent } from './pages/client-detail/client-detail.component';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { CampusesModule } from './modules/campuses/campuses.module';
import { ClientsRoutes } from './clients.routes';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    ClientDetailComponent,
    ClientListComponent]
  ,
  imports: [
    CommonModule,
    ClientsRoutes,
    CampusesModule,
    SharedModule,
    CoreModule

  ]
})
export class ClientsModule { }
