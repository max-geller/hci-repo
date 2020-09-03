import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';

import { ProjectService } from './../../../../core/services/project.service';
import { ConfirmDeleteService } from '../../../../shared/services/confirm-delete.service';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { ProjectInterface } from './../../../../core/models/project.model';

@Component({
  selector: 'app-favorites-table',
  templateUrl: './favorites-table.component.html',
})

export class FavoritesTableComponent implements OnInit {
  projects: MatTableDataSource<any>;
  displayedColumns = [
    'id',
    'name',
    'status',
    'cost',
    'client',
    'edit',
    'delete',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private afs: AngularFirestore,
    public dialog: MatDialog,
    public service: ProjectService,
    public confirmDeleteService: ConfirmDeleteService,
  ) {
  }
  // MatPaginator Output


  deleteProject(project: ProjectInterface): void {
    this.afs.doc('projects/' + project).delete();
  }


  ngOnInit(): void {
    this.afs
      .collection<any>('projects')
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.projects = new MatTableDataSource(data);
        this.projects.sort = this.sort;
        this.projects.paginator = this.paginator;
        this.projects.sort = this.sort;
      });
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.projects.filter = filterValue;
  }

}