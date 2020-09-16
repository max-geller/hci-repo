import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore,  } from '@angular/fire/firestore';
import { ProjectInterface } from './../../../../../core/models/project.model';

@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styles: [
  ]
})
export class ProjectCarouselComponent {
  projects$: Observable<any>;
  project: Observable<ProjectInterface>;
  constructor(afs: AngularFirestore) {
    this.projects$ = afs.collection('projects', ref => ref.orderBy('id')).valueChanges();
    console.log(this.project);

  }
}
