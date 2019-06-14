import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseAuth } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore, public router: Router) {
  }

  getUsers() {
    return this.firestore.collection('users').get().subscribe((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    })
  }

  login(userName:string, password:string){
    // this.firebase.signInWithEmailAndPassword(userName, password).then(d=>{
    //   console.log(d)
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ...
    // })
  }

  resisterUser(data) {

  }
}
