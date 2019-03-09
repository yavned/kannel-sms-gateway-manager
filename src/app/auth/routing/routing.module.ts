import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart'
import { OrganizationChartModule } from 'primeng/organizationchart';
import { RoutingComponent } from './routing.component';
import { RoutingRoutingModule } from './routing-routing.module';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartModule,
    OrganizationChartModule,
    ReactiveFormsModule,
    RoutingRoutingModule,
    TableModule,
    DialogModule,
    DropdownModule,
    ButtonModule
  ],
  declarations: [
    RoutingComponent
  ],
  providers: [],
})

export class RoutingModule { }
