import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';

import { Route } from '../../core/services/route.service';

const routes: Routes = Route.withShell([
  { path: '', redirectTo: 'reports', pathMatch: 'full' },
  { path: 'reports', component: ReportsComponent }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class ReportsRoutingModule { }
