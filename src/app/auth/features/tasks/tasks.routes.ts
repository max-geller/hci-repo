import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: TaskListComponent
    },
    {
        path: 'task/:id',
        component: TaskDetailComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksRoutes { }
