import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ProjectInterface } from './../../../../../core/models/project.model';

export interface TagInterface {

}

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
})

export class ProjectListComponent {
  projects$: Observable<any>;
  projectDoc: AngularFirestoreDocument<ProjectInterface>;
  project: Observable<ProjectInterface>;
  tags$: Observable<TagInterface>
  constructor(afs: AngularFirestore) {
    this.projects$ = afs.collectionGroup('projects', ref => ref.
      where('isActive', '==', true))
      .valueChanges();
    this.projectDoc = afs.doc<ProjectInterface>('projects/${id}');
    this.tags$ = this.projectDoc.valueChanges();
    console.log(this.project);

  }

}
