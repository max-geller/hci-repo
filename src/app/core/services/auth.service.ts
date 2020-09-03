import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';
import { UserInterface } from '../models/user.model';
import { DOCUMENT } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class AuthService {
  // Define an Observable for User's Auth State
  user$: Observable<UserInterface>;
  isAuthenticated: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private toastr: ToastrService
  ) {

    // Return User's Auth State:
    this.user$ = afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<UserInterface>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );

  }


  userStatus(): any {
    return this.afAuth.authState;
  }

  // Update User Data to Firestore Collection after Login*


  updateUserData(user$): any {
    const userRef: AngularFirestoreDocument<UserInterface> = this.afs.doc(
      `users/${user$.uid}`
    );
    const data = {
      uid: user$.uid,
      id: user$.uid,
      email: user$.email
    };
    return userRef.set(data, { merge: true });
  }


  // Email Signin
  emailSignIn(email: string, password: string): any {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isAuthenticated = true;
        console.log(this.afAuth.auth.currentUser + 'Successfully signed in!');
      })
      .then(() => {
        // Redirect to Home
        this.router.navigate(['/auth/projects']);
      })
      .then(() => {
        this.toastr.success('Successfully signed in to your account!', 'LOGGED IN!', {
          timeOut: 2000,
        });

      })
      .then(res => {
        console.log(this.afAuth.authState);
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }

  emailSignUp(email: string, password: string): any {
    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password).
      then((credential) => {
        this.updateUserData(credential.user);
      })
      .then(() => {
        this.toastr.success('Account info saved, please continue with setting up your profile!', 'SAVED', {
          timeOut: 2000,
        });

      })
      .then(res => {
        this.isAuthenticated = true;
      })

      .then(() => {
        // Redirect to Account Setup
        this.router.navigate(['/auth/sessions/setup']);
      });
  }

  // Sign Out
  signOut(): any {
    this.afAuth.auth.signOut().then(() => {
      this.isAuthenticated = false;
      this.router.navigate(['/auth/home'])
        .then(() => {
          this.toastr.success('You have been successfully logged out.', 'LOGGED OUT', {
            timeOut: 2000,
          });
        });
    });
  }
  // Verify Email

  // Forgot Password
  ForgotPassword(passwordResetEmail): any {
    return this.afAuth.auth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox!');
      })
      .catch(error => {
        window.alert(error);
      });
  }
}
