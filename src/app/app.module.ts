import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {MaterialModulesModule} from './core/material-modules/material-modules.module'

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component'
import { HelloComponent } from './hello.component';

const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent

  }];
@NgModule({
  imports:      [ BrowserModule,BrowserAnimationsModule,
  RouterModule.forRoot(AppRoutes), FormsModule,MaterialModulesModule ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
