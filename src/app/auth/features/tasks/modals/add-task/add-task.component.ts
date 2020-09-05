import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TaskService } from './../../../../../core/services/task.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  templateUrl: './add-task.component.html',
})


export class AddTaskComponent implements OnInit {
  addTaskFormGroup: FormGroup;

  constructor(
    private taskService: TaskService, 
    private fb: FormBuilder, 
    private dialogRef: MatDialogRef<AddTaskComponent>, 
    private afAuth: AngularFireAuth) { }

  ngOnInit(): any {
    const userAuthId = this.afAuth.auth.currentUser.uid;
    this.addTaskFormGroup = this.fb.group({
      title: '',
      priority: '',
      dueDate: '',
      project: '',
      isActive: true,
      userId: userAuthId,
    });
  }

  save(): any {
    this.dialogRef.close(this.addTaskFormGroup.value);
  }

  close(): any {
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
