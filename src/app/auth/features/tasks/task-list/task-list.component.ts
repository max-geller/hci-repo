import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore, } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { AddTaskComponent } from './../modals/add-task/add-task.component';
import { EditTaskComponent } from './../modals/edit-task/edit-task.component';
import { TaskService } from './../../../../core/services/task.service';
import { MatPaginator } from '@angular/material/paginator';
import { DateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TaskListComponent implements OnInit {
  tasksOverdue$: Observable<any>;
  tasks$: any;
  taskRef$: Observable<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private afs: AngularFirestore, public afAuth: AngularFireAuth,
    public service: TaskService,

    public dialog: MatDialog, private dateAdapter: DateAdapter<Date>) {

    this.dateAdapter.setLocale('en-US');
  }

  addTask(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddTaskComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.service.createTask(data));
  }

  editTask(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(EditTaskComponent, dialogConfig);

  }
  deleteTask(): void {
  }

  ngOnInit(): void {
    const userAuthId = this.afAuth.auth.currentUser.uid;
    this.taskRef$ = this.afs.collectionGroup('tasks', ref => ref.
      where('userId', '==', userAuthId))
      .valueChanges();
    this.tasksOverdue$ = this.afs.collectionGroup('tasks', ref => ref.
      where('userId', '==', userAuthId)
      .where('isOverdue', '==', false))
      .valueChanges();
    console.log(userAuthId);

  }
}
