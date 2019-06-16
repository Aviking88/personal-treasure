import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MaterialModulesModule } from '../core/material-modules/material-modules.module';

import { AuthGuard } from 'app/shared/guard/auth.guard';
import { FeaturesRoutes } from './core-feature.routes';
import { CoreFeatureComponent, DashboardComponent, TreasureComponent, SettingsComponent } from './index';
import { FormsModule } from '@angular/forms';
import { TreasureModalComponent } from './treasure/treasure-modal/treasure-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModulesModule,
    RouterModule.forChild(FeaturesRoutes),
  ],
  entryComponents:[TreasureModalComponent],
  exports: [CoreFeatureComponent],
  providers: [AuthGuard],
  declarations: [CoreFeatureComponent, DashboardComponent, TreasureComponent, SettingsComponent, TreasureModalComponent],
})
export class CoreFeaturesModule {}
