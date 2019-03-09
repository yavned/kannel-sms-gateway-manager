import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopApiComponent } from './develop-api.component';

import { Route } from '../../core/services/route.service';

const routes: Routes = Route.withShell([
  { path: '', redirectTo: 'develop-api', pathMatch: 'full' },
  { path: 'develop-api', component: DevelopApiComponent }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class DevelopRoutingModule { }
