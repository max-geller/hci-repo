import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from './../../shared/shared.module';

import { ProjectsRoutes } from './projects.routes';

import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ProjectFilterComponent } from './components/project-filter/project-filter.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ProjectsRoutes,
  ]
})
export class ProjectsModule { }
