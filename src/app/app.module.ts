import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModulesModule } from './core/material-modules/material-modules.module';

import { CoreFeaturesModule } from './core-features/core-features.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseService } from './shared/service/firebase.service';
import { AppRoutes } from './app.routes';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { DataServiceService } from './shared/service/data.service';

const firebaseConfig = {
  apiKey: 'AIzaSyDVjmrsylljEuXs91CPs69LicryYrQWodE',
  authDomain: 'personal-treasure.firebaseapp.com',
  databaseURL: 'https://personal-treasure.firebaseio.com',
  projectId: 'personal-treasure',
  storageBucket: 'personal-treasure.appspot.com',
  messagingSenderId: '185166452380',
  appId: '1:185166452380:web:6fa07cb5f2191ae3',
};

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(AppRoutes),
    AngularFirestoreModule,
    AngularFireAuthModule,
    CoreFeaturesModule,

    FormsModule,
    MaterialModulesModule,
  ],
  declarations: [AppComponent, LoginComponent],
  providers: [ {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}, DataServiceService, FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
