import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../users.service';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../../core/services/api.service';
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.scss']
})
export class ActiveUserComponent implements OnInit, OnDestroy {
  id: string;
  user: any = {};
  userRoutes: Observable<any[]>;
  $subscription: Subscription = new Subscription();
  countries: Observable<any[]>;
  routes: Observable<any[]>;
  countryID: number;
  userRouteForm = this.fb.group({
    SMSRouteID: ['', Validators.required],
    CountryID: ['', Validators.required],
    Rate: ['', Validators.required]
  });
  editUserRouteForm = this.fb.group({
    SMSRouteUserID: ['', Validators.required],
    SMSRouteID: ['', Validators.required],
    CountryID: ['', Validators.required],
    Rate: ['', Validators.required]
  });
  selectedUserRoute: any = {};
  showModal = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private api: ApiService,
    private fb: FormBuilder
  ) {
    this.route.params
      .subscribe(params => {
        this.id = params['id'];
      });

  }

  ngOnInit() {

    // get user info
    this.$subscription.add(this.userService.getSingleUser(this.id).subscribe(
      res => {
        console.log(res);
        this.user = res;
      },
      err => console.log(err)
    ));

    // get userRoutes
    this.userRoutes = this.api.get('routeuser/user/' + this.id, {}, true).map(m => m.Data);

    // get countries
    this.countries = this.api.get('country/list/', {}, false);

    // get routes
    this.routes = this.api.get('route', {}, true).map(m => m.Data);
  }

  ngOnDestroy() {
    this.$subscription.unsubscribe();
  }

  add() {

    const body = {
      UserID: this.id,
      CountryID: this.userRouteForm.controls['CountryID'].value,
      SMSRouteID: this.userRouteForm.controls['SMSRouteID'].value,
      Rate: this.userRouteForm.controls['Rate'].value,
    };

    /*     if (this.selectedRoute.RateCustome && this.selectedRoute.RateCustome !== this.selectedRoute.Rate) {
          body.Rate = this.selectedRoute.RateCustome;
        } else {
          body.Rate = this.selectedRoute.Rate;
        } */

    this.api.post('routeuser', body, true)
      .subscribe(
        res => {

          if (res.Success === true)
            this.userRoutes = this.api.get('routeuser/user/' + this.id, {}, true).map(m => m.Data);
        },
        err => console.log(err));
  }

  delete(id) {
    this.$subscription.add(this.api.delete('routeuser/' + id, true)
      .map(res => res.json())
      .subscribe(
        res => {
          if (res.Success === true) {
            this.userRoutes = this.api.get('routeuser/user/' + this.id, {}, true).map(m => m.Data);
          }
        },
        err => console.log(err)));
  }

  edit() {

    const body = {
      SMSRouteUserID: this.editUserRouteForm.controls['SMSRouteUserID'].value,
      UserID: this.id,
      SMSRouteID: this.editUserRouteForm.controls['SMSRouteID'].value,
      CountryID: this.editUserRouteForm.controls['CountryID'].value,
      Rate: this.editUserRouteForm.controls['Rate'].value
    };

    this.api.patch('routeuser', body, true)
      .subscribe(
        res => {
          if (res.Success === true)
            // get userRoutes
            this.userRoutes = this.api.get('routeuser/user/' + this.id, {}, true).map(m => m.Data);
        },
        err => console.log(err));

    this.showModal = false;
  }

  showEditModal(userRoute: any) {
    this.editUserRouteForm.patchValue({
      SMSRouteUserID: userRoute.SMSRouteUserID,
      CountryID: userRoute.CountryID,
      SMSRouteID: userRoute.SMSRouteID,
      Rate: userRoute.Rate,
    });
    this.showModal = true;
  }

  getConnectionTypeClass(connType: string): string {
    switch (connType) {
      case 'DC': return 'color-gold';
      case 'HQ': return 'color-silver';
      case 'WS': return 'color-bronze';
    }

  }

}

export class ModelComponent {

  checked: boolean;

}

class SelectedRoute {
  UserID: number;
  SMSRouteID: number;
  CountryID: number;
  Rate: number;
}
