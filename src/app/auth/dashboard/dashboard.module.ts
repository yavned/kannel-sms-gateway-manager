import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartModule } from 'primeng/chart'
import { OrganizationChartModule } from 'primeng/organizationchart';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ChartModule,
    OrganizationChartModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [],
})

export class DashboardModule {}
