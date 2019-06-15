import { AuthService } from '../shared/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  loginPassword = '';
  isLogin = true;
  registrationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
    cnfPassword: new FormControl(''),
    email: new FormControl(''),
    cnfEmail: new FormControl(''),
  });
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  get email() {
    return this.registrationForm.get('email').value;
  }

  get password() {
    return this.registrationForm.get('password').value;
  }

  login() {
    this.authService.login(this.username, this.loginPassword);
  }

  register() {
    this.authService.registerUser(this.email, this.password).subscribe((data) => {
      console.log(data);
    },(err)=>{
      console.log(err);
    });
  }
}
