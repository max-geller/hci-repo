import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { ProjectInterface } from './../../../../core/models/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
})
export class ProjectDetailComponent implements OnInit {
  public project: ProjectInterface = {
    id: null
  };

  constructor(private dataApi: FirestoreService, public afs: AngularFirestore, private route: ActivatedRoute) { }


  ngOnInit() {
    const idProject = this.route.snapshot.params['id'];
    this.getDetails(idProject);
    console.log(idProject);
    

  }

  getDetails(idProject: string): void {
    this.dataApi.getOneProject(idProject).subscribe(project => {
      this.project = project;

    });
  }


}
