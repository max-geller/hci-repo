import { IndicesRoutes } from './indices.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexDetailComponent } from './pages/index-detail/index-detail.component';
import { IndexListComponent } from './pages/index-list/index-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndexChartsComponent } from './components/index-charts/index-charts.component';



@NgModule({
  declarations: [IndexDetailComponent, IndexListComponent, IndexChartsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    IndicesRoutes
  ]
})
export class IndicesModule { }
