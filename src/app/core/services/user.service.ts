
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserInterface } from './../models/user.model';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private afs: AngularFirestore) { }
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
    return this.afs.collection('users').add(user);
  }

  updateUser(user: UserInterface): any {
    this.afs.doc('users/' + user.uid).update(user);
  }

  deleteUser(user: UserInterface): any {
    this.afs.doc('users/' + user).delete();
  }
}




