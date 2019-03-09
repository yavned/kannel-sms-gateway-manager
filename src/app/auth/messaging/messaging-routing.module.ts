import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagingComponent } from './messaging.component';

import { Route } from '../../core/services/route.service';

const routes: Routes = Route.withShell([
  { path: '', redirectTo: 'messaging', pathMatch: 'full' },
  { path: 'messaging', component: MessagingComponent }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class MessagingRoutingModule { }
