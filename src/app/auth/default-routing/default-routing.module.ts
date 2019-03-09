import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart'
import { OrganizationChartModule } from 'primeng/organizationchart';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { DefaultRoutingRoutingModule } from './default-routing-routing.module';
import { DefaultRoutingComponent } from './default-routing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartModule,
    OrganizationChartModule,
    ReactiveFormsModule,
    DefaultRoutingRoutingModule,
    TableModule,
    DialogModule,
    DropdownModule,
    ButtonModule
  ],
  declarations: [
    DefaultRoutingComponent
  ],
  providers: [],
})

export class DefaultRoutingModule { }
