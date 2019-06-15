import { AuthService } from '../shared/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.username, this.password);
  }

  register(){
    this.router.navigate(['/register']);
  }
}
