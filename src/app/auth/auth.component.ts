import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SharedService } from '../core/services/shared.service';

@Component({
  selector: 'sms-auth-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
  title = 'sms-auth';
  userId: string;

  sidebarSubscription$: Subscription;
  isSidebarExpanded: boolean = false;

  constructor(
    private _sharedService: SharedService
  ) {}

  expandMenu(res: boolean) {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  ngOnInit() {

    this.sidebarSubscription$ = this._sharedService.isSidebarExpanded.subscribe(res => this.expandMenu(res));

  }
}
