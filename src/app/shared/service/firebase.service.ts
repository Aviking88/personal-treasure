import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore, public router: Router) {
  }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  resisterUser(data) {

  }
}
