import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { TaskInterface } from './../../../../core/models/task.model';

@Component({
  templateUrl: './task-detail.component.html',
})
export class TaskDetailComponent implements OnInit {
  public task: TaskInterface;
  constructor(private dataApi: FirestoreService, public afs: AngularFirestore, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idTask = this.route.snapshot.params['id'];
    this.getDetails(idTask);
    console.log(idTask);
  }
  getDetails(idTask: string): void {
    this.dataApi.getOneTask(idTask).subscribe(task => {
      this.task = task;
    });
  }
}
