import { FirebaseService } from './shared/service/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(){
    this.firebaseService.getTreasures();
  }
}
