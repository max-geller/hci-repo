import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from './../../../shared/shared.module';

import { ProjectsRoutes } from './projects.routes';

import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ProjectFilterComponent } from './components/project-filter/project-filter.component';
import { ProjectTableComponent } from './components/project-table/project-table.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { ProjectCarouselComponent } from './components/project-carousel/project-carousel.component';
import { ProjectMapComponent } from './components/project-map/project-map.component';
import { ProjectCostTrendComponent } from './components/project-cost-trend/project-cost-trend.component';
import { ProjectCostSourcesComponent } from './components/project-cost-sources/project-cost-sources.component';
import { ProjectDesignPackagesComponent } from './components/project-design-packages/project-design-packages.component';
import { ProjectItemComponent } from './pages/project-list/components/project-item/project-item.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectFilterComponent,
    ProjectTableComponent,
    AddProjectComponent,
    EditProjectComponent,
    ProjectCarouselComponent,
    ProjectMapComponent,
    ProjectCostTrendComponent,
    ProjectCostSourcesComponent,
    ProjectDesignPackagesComponent,
    ProjectItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ProjectsRoutes,
  ]
})
export class ProjectsModule { }
