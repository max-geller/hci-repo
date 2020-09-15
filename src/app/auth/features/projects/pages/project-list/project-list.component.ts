import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ProjectInterface } from './../../../../../core/models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
})

export class ProjectListComponent {
  projects$: Observable<any>;
  projectDoc: AngularFirestoreDocument<ProjectInterface>;
  project: Observable<ProjectInterface>;

  constructor(afs: AngularFirestore) {
    this.projects$ = afs.collection('projects', ref => ref.orderBy('id')).valueChanges();
    this.projectDoc = afs.doc<ProjectInterface>('projects/${id}');
    this.project = this.projectDoc.valueChanges();

  }
}