import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingComponent } from './messaging.component';
import { MessagingRoutingModule } from './messaging-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MessagingRoutingModule
  ],
  declarations: [MessagingComponent]
})

export class MessagingModule { }
