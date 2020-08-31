import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexDetailComponent } from './pages/index-detail/index-detail.component';
import { IndexListComponent } from './pages/index-list/index-list.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [IndexDetailComponent, IndexListComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class IndicesModule { }
