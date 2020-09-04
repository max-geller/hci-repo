import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore, } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  templateUrl: './notifications.component.html',
})

export class NotificationsComponent implements OnInit {
  notifications$: any;
  notificationRef$: Observable<any>;
  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
  }
  ngOnInit(): void {
    const userAuthId = this.afAuth.auth.currentUser.uid;
    this.notificationRef$ = this.afs.collectionGroup('notifications', ref => ref.where('userId', '==', userAuthId)).valueChanges();
    console.log(userAuthId);
  }
}
