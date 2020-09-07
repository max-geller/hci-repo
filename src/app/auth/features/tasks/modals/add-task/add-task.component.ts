import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder,  FormGroup } from '@angular/forms';
import { TaskService } from './../../../../../core/services/task.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { DateAdapter } from '@angular/material/core';

@Component({
  templateUrl: './add-task.component.html',
})

export class AddTaskComponent implements OnInit {
  addTaskFormGroup: FormGroup;

  constructor(
    private taskService: TaskService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddTaskComponent>,
    private afAuth: AngularFireAuth,
    private dateAdapter: DateAdapter<any>) { this.dateAdapter.setLocale('en-US'); }

  ngOnInit(): any {
    const userAuthId = this.afAuth.auth.currentUser.uid;
    this.addTaskFormGroup = this.fb.group({
      id: '' ,
      title: '',
      priority: '',
      dueDate: '',
      project: '',
      isActive: true,
      assetType: 'Task',
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
