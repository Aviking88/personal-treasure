import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MaterialModulesModule } from '../core/material-modules/material-modules.module';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';

import { AuthGuard } from 'app/shared/guard/auth.guard';
import { FeaturesRoutes } from './core-feature.routes';
import { CoreFeatureComponent, DashboardComponent, TreasureComponent, SettingsComponent } from './index';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    MaterialModulesModule,
    RouterModule.forChild(FeaturesRoutes),
  ],
  exports: [CoreFeatureComponent],
  providers: [AuthGuard],
  declarations: [CoreFeatureComponent, DashboardComponent, TreasureComponent, SettingsComponent],
})
export class CoreFeaturesModule {}
