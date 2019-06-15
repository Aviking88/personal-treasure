import { Component } from '@angular/core';
import { AuthService } from 'app/shared/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'core-features',
  templateUrl: './core-feature.component.html',
  styleUrls: ['./core-feature.component.scss'],
})
export class CoreFeatureComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
