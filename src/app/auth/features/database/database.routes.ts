import { DatabaseDetailComponent } from './pages/database-detail/database-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseHomeComponent } from './pages/database-home/database-home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: DatabaseHomeComponent
    },
    {
        path: 'contractor/:id',
        component: DatabaseDetailComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DatabaseRoutes { }
