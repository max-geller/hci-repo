import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { ClientDetailComponent } from './pages/client-detail/client-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: ClientListComponent
    },
    {
        path: 'clients/:id',
        component: ClientDetailComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientsRoutes { }
