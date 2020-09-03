import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserInterface } from './../../../../core/models/user.model';
import { UserService } from './../../../../core/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-setup-form',
  templateUrl: './setup-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SetupFormComponent implements OnInit {
  userForm: UserInterface;

  constructor(private fb: UserService) { }
  ngOnInit(): any {
  }

  Register(regForm: NgForm): any {
    this.userForm = regForm.form.value;
    this.save();
  }

  save(): any {
    this.fb.createUser(this.userForm);
  }
}
