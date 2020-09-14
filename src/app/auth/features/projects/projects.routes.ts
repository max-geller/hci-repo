import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: ProjectListComponent
    },
    {
        path: 'project/:id',
        component: ProjectDetailComponent,
    },
    {
        path: 'estimates',
        loadChildren: () => import('./modules/estimates/estimates.module').then(m => m.EstimatesModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutes { }
