import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../../core/services/route.service';
import { CountryRoutingComponent } from './country-routing.component';

const routes: Routes = Route.withShell([
  { path: '', redirectTo: 'country-routing', pathMatch: 'full' },
  { path: 'country-routing', component: CountryRoutingComponent }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class CountryRoutingRoutingModule { }
