
import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './../models/user.model';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private firestore: AngularFirestore) { }
  form = new FormGroup({
    id: new FormControl(''),
    displayName: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    company: new FormControl(''),
  });

  getUsers(): any {
    return this.firestore.collection('users').snapshotChanges();
  }

  createUser(user: User): any {
    return this.firestore.collection('users').add(user);
  }

  updateUser(user: User): any {
    this.firestore.doc('users/' + user.uid).update(user);
  }

  deleteUser(user: User): any {
    this.firestore.doc('users/' + user).delete();
  }

  createNewUser(data): any {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("users")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }



}




