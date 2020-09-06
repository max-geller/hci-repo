import { Injectable, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { TaskInterface } from './../models/task.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})


export class TaskService {

    constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) { }
    getTasks(): any {
        return this.afs.collection('tasks').snapshotChanges();
    }

    createTask(task: TaskInterface): any {
        return this.afs.collection('tasks').add(task);

    }

    updateTask(task: TaskInterface): any {
        this.afs.doc('tasks/' + task.id).update(task);
    }

    deleteTask(task: TaskInterface): any {
        this.afs.doc('tasks/' + task).delete();
    }

    // Create Variable for "Overdue" tasks



    // 



}




