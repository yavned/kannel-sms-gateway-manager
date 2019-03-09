import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopApiComponent } from './develop-api.component';
import { DevelopRoutingModule } from './develop-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DevelopRoutingModule
  ],
  declarations: [DevelopApiComponent]

})
export class DevelopApiModule { }
