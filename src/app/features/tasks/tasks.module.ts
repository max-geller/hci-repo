import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksRoutes } from './tasks.routes';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [TaskListComponent, TaskDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    TasksRoutes,
    RouterModule
  ]
})
export class TasksModule { }
