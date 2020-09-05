import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksRoutes } from './tasks.routes';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { AddTaskComponent } from './modals/add-task/add-task.component';
import { EditTaskComponent } from './modals/edit-task/edit-task.component';
import { TaskService } from 'src/app/core/services/task.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailComponent,
    AddTaskComponent,
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    TasksRoutes,
    RouterModule
  ],
  providers: [
    TaskService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' }
  ],
  entryComponents: [
    // Put Modals Here
    AddTaskComponent,
    EditTaskComponent,
  ]
})
export class TasksModule { }
