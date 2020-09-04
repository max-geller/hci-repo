import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore, } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})



export class TaskListComponent implements OnInit {
  tasks$: any;
  taskRef$: Observable<any>;
  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {

  }





  ngOnInit(): void {
    const userAuthId = this.afAuth.auth.currentUser.uid;
    this.taskRef$ = this.afs.collectionGroup('tasks', ref => ref.where('userId', '==', userAuthId)).valueChanges();

    console.log(userAuthId);

  }
}
