import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractorListComponent } from './pages/contractor-list/contractor-list.component';
import { ContractorDetailComponent } from './pages/contractor-detail/contractor-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: ContractorListComponent
    },
    {
        path: 'contractor/:id',
        component: ContractorDetailComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContractorsRoutes { }
