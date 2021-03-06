import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('./core-features/core-features.module').then((mod) => mod.CoreFeaturesModule),
    canLoad: [AuthGuard],
  }
];
