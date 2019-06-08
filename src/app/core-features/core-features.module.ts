import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MaterialModulesModule} from '../core/material-modules/material-modules.module'
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreasureComponent } from './treasure/treasure.component';
import { SettingsComponent } from './settings/settings.component';

const featuresRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent

  },
  {
    path: 'treasure',
    pathMatch: 'full',
    component: TreasureComponent

  },
  {
    path: 'settings',
    pathMatch: 'full',
    component: SettingsComponent
  }];
@NgModule({
  imports: [
    CommonModule,
    MaterialModulesModule,
    RouterModule.forChild(featuresRoutes)
  ],
  declarations: [DashboardComponent, TreasureComponent, SettingsComponent]
})
export class CoreFeaturesModule { }