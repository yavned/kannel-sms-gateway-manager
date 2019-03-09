import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../../core/services/route.service';
import { DefaultRoutingComponent } from './default-routing.component';

const routes: Routes = Route.withShell([
  { path: '', redirectTo: 'default-routing', pathMatch: 'full' },
  { path: 'default-routing', component: DefaultRoutingComponent },
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class DefaultRoutingRoutingModule { }
