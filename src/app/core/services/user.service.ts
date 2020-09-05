import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
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
    const data = {
      phone: user.phone,
      company: user.company,
      firstName: user.firstName,
      lastName: user.lastName,
      displayName: user.firstName + ' ' + user.lastName
    };
    this.afAuth.auth.currentUser.sendEmailVerification()
    const userRef: AngularFirestoreDocument<UserInterface> = this.afs.doc(
      `users/${this.afAuth.auth.currentUser.uid}`
    );
    
    return userRef.set(data, { merge: true })

      .then(res => {
        console.log(this.afAuth.auth.currentUser.uid + 'Account creation successful!');
      })
      .then(() => {
        this.toastr.success('Successfully created your account!', 'ACCOUNT CREATED!', {
          timeOut: 2000,
        })
      })
      .then(() => {
        // Redirect to Profile Setup
        this.router.navigate(['/auth/projects']);
      });
  }

  updateUser(user: UserInterface): any {
    this.afs.doc('users/' + user.uid).update(user);
  }

  deleteUser(user: UserInterface): any {
    this.afs.doc('users/' + user).delete();
  }



// Obtain Projects by User




// Obtain Settings by User



// Obtain Tasks by User



// Obtain Favorites by User


// Obtain Notifications by User



}




