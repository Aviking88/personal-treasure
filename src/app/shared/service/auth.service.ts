import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { from, Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;
  authState = null;
  constructor(public afAuth: AngularFireAuth, public router: Router, private firebaseService: FirebaseService) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        this.firebaseService.setUser(user);
        localStorage.setItem('treasure-user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('treasure-user', null);
      }
    });
  }

  login(email: string, password: string) {
    try {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      alert('Error!' + e.message);
    }
  }

  registerUser(email: string, password: string): Observable<any> {
    return from(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
  }

  resetPasswordInit(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email, { url: 'http://localhost:4200/login' });
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('treasure-user');
    this.router.navigate(['login']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('treasure-user'));
    return user !== null;
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }
  get currentUserObservable(): any {
    return this.afAuth.auth;
  }
}
