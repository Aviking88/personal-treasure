import { FirebaseService } from './shared/service/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(){
    this.firebaseService.getUsers().subscribe(d=>{
      console.log(d);
    })

  }
}
