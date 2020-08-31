import { SharedModule } from './../../shared/shared.module';
import { ProjectsRoutes } from './projects.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ProjectsRoutes,
  ]
})
export class ProjectsModule { }
