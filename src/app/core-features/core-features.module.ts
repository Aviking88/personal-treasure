import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModulesModule } from '../core/material-modules/material-modules.module'
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreasureComponent } from './treasure/treasure.component';
import { SettingsComponent } from './settings/settings.component';
import { CoreFeatureComponent } from './core-feature.component';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';

const featuresRoutes: Routes = [
  {
    path: 'home',
    component: CoreFeatureComponent,
    children: [
      {
        path: 'treasure',
        pathMatch: 'full',
        component: TreasureComponent
      },
      {
        path: 'dashboard',
        pathMatch: 'full',
        component: DashboardComponent
      },
      {
        path: 'settings',
        pathMatch: 'full',
        component: SettingsComponent
      },
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent
      },
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    MaterialModulesModule,
    RouterModule.forChild(featuresRoutes)
  ],
  exports:[ CoreFeatureComponent],
  declarations: [CoreFeatureComponent,DashboardComponent, TreasureComponent, SettingsComponent]
})
export class CoreFeaturesModule { }