import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseAuth, FirebaseStorage } from '@angular/fire';
import { ITreasureData } from 'app/core-features';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  user: firebase.User;
  constructor(private firestore: AngularFirestore, public router: Router) {
  }

  getTreasures() {
    return this.firestore
      .collection('treasures', x => x.where('uid', '==' , this.user.uid))
      .get();
  }

  setUser(user: firebase.User) {
    this.user = user;
  }

  getUserData(): firebase.User {
    return this.user;
  }

  login(userName: string, password: string) {
    // this.firebase.signInWithEmailAndPassword(userName, password).then(d=>{
    //   console.log(d)
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ...
    // })
  }

  addTreasure(treasure: ITreasureData) {
    treasure.uid = this.getUserData().uid;
    const treasures = this.firestore
    .collection('treasures');
    treasures.add(treasure).then(d=>{
      console.log(d);
    })
 //   this.firestore
  }

  resisterUser(data) {}
}
