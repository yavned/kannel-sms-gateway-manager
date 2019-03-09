import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

import { ReportsComponent } from './reports.component';
import { FinancialComponent } from './financial/financial.component';

@NgModule({
  imports: [
    CommonModule,
    TabViewModule,
    ReportsRoutingModule,
    TableModule
  ],
  declarations: [
    FinancialComponent,
    ReportsComponent
  ]
})

export class ReportsModule { }
