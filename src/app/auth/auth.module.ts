// --- NG Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// --- GLobal Shell Components
import { HeaderComponent } from '../core/shell/header/header.component';
import { SidebarComponent } from '../core/shell/sidebar/sidebar.component';

// --- Main Component
import { AuthComponent } from './auth.component';

// --- Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { MessagingModule } from './messaging/messaging.module';
import { DevelopApiModule } from './develop-api/develop-api.module';
import { UserService } from './users/users.service';
import { RoutingModule } from './routing/routing.module';
import { CountryRoutingModule } from './country-routing/country-routing.module';
import { DefaultRoutingModule } from './default-routing/default-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    DashboardModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule,
    ReportsModule,
    MessagingModule,
    DevelopApiModule,
    RoutingModule,
    CountryRoutingModule,
    DefaultRoutingModule
  ],
  declarations: [
    AuthComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  providers: [UserService]
})

export class AuthModule { }
