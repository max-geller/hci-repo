import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
})

export class ProjectListComponent {
  projects$: Observable<any>;
  constructor(afs: AngularFirestore) {
    this.projects$ = afs.collection('projects', ref => ref.orderBy('id')).valueChanges();

}
