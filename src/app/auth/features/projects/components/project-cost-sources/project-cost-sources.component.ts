import { ProjectService } from './../../../../../core/services/project.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-cost-sources',
  templateUrl: './project-cost-sources.component.html',
})

export class ProjectCostSourcesComponent implements OnInit {
  estimates: MatTableDataSource<any>;
  displayedColumns = [
    'assetType',
    'author',
    'preparedFor',
    'designStage',
    'designPackages',
    'issuedDate',
    'status',
    'cost',
    'view',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private afs: AngularFirestore,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public service: ProjectService
  ) {
  }

  ngOnInit(): void {
    const idProject = this.route.snapshot.params['id'];
    this.afs.collectionGroup('estimates', ref => ref.where('projectId', '==', idProject)).valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.estimates = new MatTableDataSource(data);
        this.estimates.sort = this.sort;
        this.estimates.paginator = this.paginator;
        this.estimates.sort = this.sort;
      });
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.estimates.filter = filterValue;
  }

}