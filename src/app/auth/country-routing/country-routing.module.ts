import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart'
import { OrganizationChartModule } from 'primeng/organizationchart';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { CountryRoutingComponent } from './country-routing.component';
import { CountryRoutingRoutingModule } from './country-routing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartModule,
    OrganizationChartModule,
    ReactiveFormsModule,
    CountryRoutingRoutingModule,
    TableModule,
    DialogModule,
    DropdownModule,
    ButtonModule
  ],
  declarations: [
    CountryRoutingComponent
  ],
  providers: [],
})

export class CountryRoutingModule { }
