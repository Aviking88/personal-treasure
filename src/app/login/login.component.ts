import { AuthService } from '../shared/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import CryptoJS = require('crypto-js');
import { FirebaseApp } from '@angular/fire';
import { FirebaseService } from 'app/shared/service/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  emailAddress = '';
  loginPassword = '';
  isLogin = true;
  isForgotPassword = false;
  registrationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
    cnfPassword: new FormControl(''),
    email: new FormControl(''),
    cnfEmail: new FormControl(''),
  });
  constructor(private router: Router, private authService: AuthService, private firebaseService: FirebaseService) {}

  ngOnInit() {}

  get email() {
    return this.registrationForm.get('email').value;
  }

  get password() {
    return this.registrationForm.get('password').value;
  }

  login() {
    console.log(CryptoJS.HmacSHA1('Message', 'Key'));
    this.authService
      .login(this.username, this.loginPassword)
      .then((data) => {
        this.firebaseService.setUser(data.user);
        this.router.navigate(['/home']);
      })
      .catch((data) => {
        // TODO: Add logic for failed login
        console.log(data);
      });
  }
  resetPassword() {
    if (!this.emailAddress) {
      alert('Type in your email first');
    } else {
      this.authService
        .resetPasswordInit(this.emailAddress)
        .then(() => alert('A password reset link has been sent to your email address'), (rejectionReason) => alert(rejectionReason))
        .catch((e) => alert('An error occurred while attempting to reset your password'));
    }
  }

  register() {
    this.authService.registerUser(this.email, this.password).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
