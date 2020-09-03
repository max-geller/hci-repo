import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { ProjectInterface } from './../models/project.model';

@Injectable({
    providedIn: 'root'
})

export class ProjectService {

    constructor(private afs: AngularFirestore) { }
    getProjects(): any {
        return this.afs.collection('projects').snapshotChanges();
    }

    createProject(project: ProjectInterface): any {
        return this.afs.collection('projects').add(project);
    }

    updateProject(project: ProjectInterface): any {
        this.afs.doc('projects/' + project.id).update(project);
    }

    deleteProject(project: ProjectInterface): any {
        this.afs.doc('projects/' + project).delete();
    }
}



