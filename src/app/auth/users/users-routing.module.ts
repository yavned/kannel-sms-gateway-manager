import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { ActiveUserComponent } from './active-user/active-user.component';



import { Route } from '../../core/services/route.service';


const routes: Routes = Route.withShell([
  { path: '', redirectTo: 'user-managment', pathMatch: 'full' },
  { path: 'user-managment', component: UsersComponent },
  { path: 'active-user/:id', component: ActiveUserComponent }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class UsersRoutingModule { }
