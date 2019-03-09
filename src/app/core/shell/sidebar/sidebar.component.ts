import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'sms-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private _router: Router,
    private _sharedService: SharedService
  ) { }

  activeDropdown = false;
  showSmsDropdown = false;
  accountData: any;
  isClosed = true;
  isWidthSmall = false;
  logoSrc = '../assets/img/white-logo.png';
  sidebarSubscription$: Subscription;


  ngOnInit() {
    this.sidebarSubscription$ = this._sharedService.isSidebarExpanded.subscribe(res => this.toggleSidebar(res));
  }

  isClosedMenu() {
    if (!this.isClosed) {
      return true;
    }

    const width = window.innerWidth;

    if (width < 1025) {
      this.isWidthSmall = true;
    } else {
      this.isWidthSmall = false;
    }

    return this.isWidthSmall;
  }

  toggleSidebar(res: boolean) {
    this.isClosed = res !== null ? res : !this.isClosed;
  }
  logout() {
    localStorage.removeItem('sms-admin-token');

    this._router.navigateByUrl('login');
  }

}
