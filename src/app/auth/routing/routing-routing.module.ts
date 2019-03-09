import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingComponent } from './routing.component';

import { Route } from '../../core/services/route.service';

const routes: Routes = Route.withShell([
  { path: 'routing', component: RoutingComponent }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class RoutingRoutingModule { }
