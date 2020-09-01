import { Injectable, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { ProjectInterface } from './../models/project.model';

@Injectable({
    providedIn: 'root'
})

export class ProjectService {

    constructor(private afs: AngularFirestore) { }
    getProjects() {
        return this.afs.collection('projects').snapshotChanges();
    }

    createProject(project: ProjectInterface) {
        return this.afs.collection('projects').add(project);
    }

    updateProject(project: ProjectInterface) {
        this.afs.doc('projects/' + project.id).update(project);
    }

    deleteProject(project: ProjectInterface) {
        this.afs.doc('projects/' + project).delete();
    }

}



