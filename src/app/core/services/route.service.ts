import { Routes } from '@angular/router';

import { AuthComponent } from '../../auth/auth.component';
import { AuthenticationGuard } from '../auth/auth.guard';

/**
 * Provides helper methods to create routes.
 */
export class Route {

  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return {Routes} The new routes using shell as the base.
   */
  static withShell(routes: Routes): Routes {
    return [{
      path: '',
      component: AuthComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true }
}];
  }

}
