import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';


import { FirestoreService } from 'src/app/core/services/firestore.service';
import { PackageInterface } from '../../../../../core/models/package.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-project-design-packages',
  templateUrl: './project-design-packages.component.html',
})
export class ProjectDesignPackagesComponent implements OnInit {
  packages$: Observable<any>;
  packages: MatTableDataSource<any>;
  displayedColumns = [
    'description',
    'structure',
    'squareFeet',
    'type',
    'storiesAboveGrade',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private dataApi: FirestoreService, private route: ActivatedRoute, public afs: AngularFirestore) {

  }

  public project: PackageInterface = {
    id: null,
  };

  ngOnInit(): any {
    const idProject = this.route.snapshot.params['id'];
    this.getDetails(idProject);
    console.log(idProject);
    this.afs.collectionGroup('packages', ref => ref.where('projectId', '==', idProject)).valueChanges()
    .subscribe(data => {
      // 1e: ...and Pass that Data to the Material Data Table
      this.packages = new MatTableDataSource(data);
      this.packages.sort = this.sort;
      this.packages.paginator = this.paginator;
      this.packages.sort = this.sort;
      console.log(this.packages)
    });
  }

  getDetails(idProject: string): void {
    this.dataApi.getOneProject(idProject).subscribe(project => {
      this.project = project;


    });
  }
  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.packages.filter = filterValue;
  }
  
}
