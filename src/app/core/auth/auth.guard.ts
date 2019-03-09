import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthenticationService } from './auth.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(): boolean {
    // @todo
    // if (this.authenticationService.isAuthenticated()) {
    //   return true;
    // }

    // Temp workaround
    if (localStorage.getItem('sms_admin_token')) {
      return true
    }

    this.router.navigate(['/login'], { replaceUrl: true });
    return false;
  }

}
