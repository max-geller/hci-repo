import { Component, ViewChild, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './../../../../../../core/services/user.service';
import { UserInterface } from './../../../../../../core/models/user.model';
import { ConfirmDeleteService } from '../../../../../../shared/services/confirm-delete.service';

@Component({
  templateUrl: './manage-users.component.html',
})

export class ManageUsersComponent implements OnInit {
  users: UserInterface[];
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private afs: AngularFirestore,
    public dialog: MatDialog,
    public userService: UserService,
    public confirmDeleteService: ConfirmDeleteService) { }

  ngOnInit(): any {
    this.userService.getUsers().subscribe(data => {
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
        }
      })
    });

  }
  createUser(user: UserInterface): any {
    return this.afs.collection('users').add(user);
  }

  getUsers(): any {
    return this.afs.collection('users').snapshotChanges();
  }
  updateUser(user: UserInterface): any {
    this.afs.doc('users/' + user.uid).update(user);
  }

  deleteUser(user: UserInterface): any {
    this.afs.doc('users/' + user.uid).delete();
  }



}
