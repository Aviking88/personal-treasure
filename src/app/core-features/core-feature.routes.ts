import { Routes } from '@angular/router';
import { CoreFeatureComponent } from './core-feature.component';
import { AuthGuard } from 'app/shared/guard/auth.guard';
import { TreasureComponent } from './treasure/treasure.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

export const FeaturesRoutes: Routes = [
  {
    path: 'home',
    component: CoreFeatureComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'treasure',
        pathMatch: 'full',
        component: TreasureComponent,
      },
      {
        path: 'dashboard',
        pathMatch: 'full',
        component: DashboardComponent,
      },
      {
        path: 'settings',
        pathMatch: 'full',
        component: SettingsComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent,
      },
    ],
  },
];
