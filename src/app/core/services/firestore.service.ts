import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { CourseInterface } from './../models/course.model';
import { ProjectInterface } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs: AngularFirestore) { }
  private projectDoc: AngularFirestoreDocument<ProjectInterface>;
  private project: Observable<ProjectInterface>;


  getOneProject(idProject: string): any {
    this.projectDoc = this.afs.doc<ProjectInterface>(`projects/${idProject}`);
    return this.project = this.projectDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as ProjectInterface;
        console.log(idProject);
        data.id = action.payload.id;
        return data;
      }
    }));
  }


}
