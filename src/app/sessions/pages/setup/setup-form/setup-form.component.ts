import { UserService } from './../../../../core/services/user.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-setup-form',
  templateUrl: './setup-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetupFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private userService: UserService; private firestore: AngularFirestore) { }


  ngOnInit(): any {

  }


  onSubmit(form: NgForm): any {
    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('users').add(data);
    }
    else {
      this.firestore.doc('users/' + form.value.id).update(data);
    }

  } s



}
