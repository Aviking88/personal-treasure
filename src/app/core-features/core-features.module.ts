import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreasureComponent } from './treasure/treasure.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, TreasureComponent, SettingsComponent]
})
export class CoreFeaturesModule { }