import { Component, OnInit } from '@angular/core';
import { WindowService } from 'src/app/core/services/window.service';
import * as firebase from 'firebase';

export class PhoneNumber {
  country: string;
  area: string;
  prefix: string;
  line: string;
  get el64(): any {
    const num = this.country + this.area + this.prefix + this.line;
    return `+${num}`;
  }
}

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
})




export class VerifyComponent implements OnInit {

  windowRef: any;

  phoneNumber = new PhoneNumber();
  verificationCode: string;
  user: any;

  constructor(private win: WindowService) { }

  ngOnInit(): void {
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
  }


  sendLoginCode(): any {
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.el64;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
      .then(result => {
        this.windowRef.confirmationResult = result;
      })
      .catch(error => console.log(error));
  }

  verifyLoginCode(): any {
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then(result => {
        this.user = result.user;
      })
      .catch(error => console.log(error, 'Incorrect code entered'));
  }

}
