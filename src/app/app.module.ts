import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModulesModule } from './core/material-modules/material-modules.module'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbThemeModule } from '@nebular/theme';

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

  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent

  }];
@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes), NbThemeModule.forRoot(),NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule, FormsModule, MaterialModulesModule],
  declarations: [AppComponent, LoginComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
