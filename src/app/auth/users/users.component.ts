import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from './users.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'sms-users-dashboard',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService]
})

export class UsersComponent implements OnInit, OnDestroy {
  displayDialog: boolean;
  user: any = {};
  newUser: boolean;
  users: any[];
  cols: any[];
  roles: any;
  userStatus: any;
  usersData: any;
  $userSubscription: Subscription;

  constructor(
    private _userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {

    this.$userSubscription = this._userService.getAllUsers()
      .subscribe(users => {
        this.users = users['Data'];
      });

    this.cols = [
      { field: 'FirstName', header: 'First Name' },
      { field: 'LastName', header: 'Last Name' },
      { field: 'Email', header: 'Email' },
      { field: 'RoleName', header: 'Role' },
      { field: 'UserStatusName', header: 'User Status' }
    ];

    this.roles = [
      { label: 'All', value: null },
      { label: 'Administrator', value: 'Administrator' },
      { label: 'User', value: 'User' },
  ];

    this.userStatus = [
      { label: 'All', value: null },
      { label: 'Active', value: 'Active' },
      { label: 'Inactive', value: 'Inactive' }
    ];
  }

  ngOnDestroy() {
    this.$userSubscription.unsubscribe();
  }

  showDialogToAdd() {
    this.newUser = true;
    this.user = {};
    this.displayDialog = true;
  }

  onRowSelect(event) {
    this.router.navigate(['/active-user', event.data.UserID]);
    console.log(event);
  }
}
