import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseHomeComponent } from './pages/database-home/database-home.component';
import { DatabaseTableComponent } from './components/database-table/database-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { DatabaseDetailComponent } from './pages/database-detail/database-detail.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { DatabaseRoutes } from './database.routes';


@NgModule({
  declarations: [
    DatabaseHomeComponent,
    DatabaseTableComponent,
    DatabaseDetailComponent,
    ItemDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    DatabaseRoutes
  ]
})
export class DatabaseModule { }
