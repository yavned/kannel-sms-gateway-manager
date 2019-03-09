import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { TableModule } from 'primeng/table';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ActiveUserComponent } from './active-user/active-user.component';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
    FormsModule,
    OrganizationChartModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    BreadcrumbModule,
    SliderModule,
    DropdownModule,
    MultiSelectModule,
    TabViewModule
  ],
  declarations: [
    UsersComponent,
    ActiveUserComponent
  ],
  providers: [],
})

export class UsersModule {}
