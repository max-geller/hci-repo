
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserInterface } from './../models/user.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService
  ) { }

  form = new FormGroup({
    uid: new FormControl(''),
    id: new FormControl(''),
    displayName: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    company: new FormControl(''),
  });

  getUsers(): any {
    return this.afs.collection('users').snapshotChanges();
  }

  createUser(user: UserInterface): any {
    return this.afs.collection('users').add(user)
      .then(res => {
        console.log(this.afAuth.auth.currentUser + 'Account creation successful!');
      })
      .then(() => {
        this.toastr.success('Successfully created your account!', 'ACCOUNT CREATED!', {
          timeOut: 2000,
        })

      })
      .then(() => {
        // Redirect to Profile Setup
        this.router.navigate(['/projects']);
      });
  }

  updateUser(user: UserInterface): any {
    this.afs.doc('users/' + user.uid).update(user);
  }

  deleteUser(user: UserInterface): any {
    this.afs.doc('users/' + user).delete();
  }
}




