import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { ApiService } from '../../core/services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-routing',
  templateUrl: './country-routing.component.html',
  styleUrls: ['./country-routing.component.scss']
})
export class CountryRoutingComponent implements OnInit, OnDestroy {
  $subscription: Subscription = new Subscription();
  countries: Observable<any[]>;
  routes: Observable<any[]>;
  userRoutes: Observable<any>;
  selectedCountry: any = {};
  selectedRoute: any = {};
  editUserRouteForm = this.fb.group({
    SMSRouteUserID: ['', Validators.required],
    SMSRouteID: ['', Validators.required],
    CountryID: ['', Validators.required],
    Rate: ['', Validators.required],
    UserID: ['', Validators.required],
    Username: [''],
    FirstName: [''],
    LastName: [''],
  });
  showModal = false;
  rateBulk: number;
  sendEmail: boolean = false;

  constructor(
    private api: ApiService,
    private fb: FormBuilder) { }

  ngOnInit() {
    // get countries
    this.countries = this.api.get('country/list/', {}, false);

    // get routes
    this.routes = this.api.get('route', {}, true).map(m => m.Data);
  }

  ngOnDestroy() {
    this.$subscription.unsubscribe();
  }

  onSelectChange() {
    //load all routes for selected country & route
    if (this.selectedCountry.CountryID && this.selectedRoute.SMSRouteID)
      this.getUseeRoutes();
  }

  getUseeRoutes() {
    // get userRoutes
    this.userRoutes = this.api.get('routeuser/country/' + this.selectedCountry.CountryID + '/route/' + this.selectedRoute.SMSRouteID, {}, true).map(m => m.Data);
  }

  delete(id) {
    this.$subscription.add(this.api.delete('routeuser/' + id, true)
      .map(res => res.json())
      .subscribe(
        res => {
          if (res.Success === true)
            this.getUseeRoutes();
        },
        err => console.log(err)));
  }

  edit() {

    const body = {
      SMSRouteUserID: this.editUserRouteForm.controls['SMSRouteUserID'].value,
      UserID: this.editUserRouteForm.controls['UserID'].value,
      SMSRouteID: this.editUserRouteForm.controls['SMSRouteID'].value,
      CountryID: this.editUserRouteForm.controls['CountryID'].value,
      Rate: this.editUserRouteForm.controls['Rate'].value
    };

    this.api.patch('routeuser', body, true)
      .subscribe(
        res => {
          if (res.Success === true)
            this.getUseeRoutes();
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
      UserID: userRoute.UserID,
      Username: userRoute.Username,
      FirstName: userRoute.FirstName,
      LastName: userRoute.LastName,
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

  bulkRateUpdate() {

    let routeUserIDs: number[] = [];
    let emails: number[] = [];

    this.$subscription.add(this.userRoutes.subscribe(data => {

      data.forEach(element => {
        routeUserIDs.push(element.SMSRouteUserID);
        emails.push(element.Email)
      });

      let body = {};

      if (this.sendEmail) {
        body = {
          rate: this.rateBulk,
          routeUserIDs: routeUserIDs,
          sendEmail: true,
          country: this.selectedCountry.Nicename,
          route: this.selectedRoute.SmscID,
          emails: emails
        };
      }
      else {
        body = {
          rate: this.rateBulk,
          routeUserIDs: routeUserIDs,
          sendEmail: false
        };
      }

      this.api.patch('updaterate', body, true)
        .subscribe(
          res => {
            if (res.Success === true)
              this.getUseeRoutes();
          },
          err => console.log(err));
    }));

  }

}