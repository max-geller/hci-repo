import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexListComponent } from './pages/index-list/index-list.component';
import { IndexDetailComponent } from './pages/index-detail/index-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: IndexListComponent
    },
    {
        path: 'index/:id',
        component: IndexDetailComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IndicesRoutes { }
