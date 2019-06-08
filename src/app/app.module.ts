import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModulesModule } from './core/material-modules/material-modules.module'

import { CoreFeaturesModule } from './core-features/core-features.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
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

  }];
  
@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes), NbThemeModule.forRoot(),NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    CoreFeaturesModule,

    NbButtonModule, FormsModule, MaterialModulesModule],
  declarations: [AppComponent, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
