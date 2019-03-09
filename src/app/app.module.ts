import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

// --- Login Module
import { LoginModule } from './login/login.module';

// --- Main Router
import { AppRoutingModule } from './app-routing.module';
import { RouteReusableStrategy } from './core/services/route-reusable-strategy';

// --- Auth Service
import { AuthenticationGuard } from './core/auth/auth.guard';
import { AuthenticationService } from './core/auth/auth.service';

// --- Helper
import { ApiService } from './core/services/api.service';
import { SharedService } from './core/services/shared.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AuthModule,
    LoginModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AuthenticationGuard,
    AuthenticationService,
    ApiService,
    SharedService,
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
