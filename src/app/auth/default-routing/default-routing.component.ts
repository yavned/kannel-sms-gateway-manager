import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from '../../../../node_modules/rxjs';
import { Validators, FormBuilder } from '../../../../node_modules/@angular/forms';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-default-routing',
  templateUrl: './default-routing.component.html',
  styleUrls: ['./default-routing.component.scss']
})
export class DefaultRoutingComponent implements OnInit, OnDestroy {
  $subscription: Subscription = new Subscription();
  countryRotes: Observable<any[]>;
  countries: Observable<any[]>;
  countriesWithoutDefaultRoute: Observable<any[]>;
  routes: Observable<any[]>;
  countryRouteForm = this.fb.group({
    CountryID: ['', Validators.required],
    SMSRouteID: ['', Validators.required],
    Rate: ['', Validators.required]
  });
  editCountryRouteForm = this.fb.group({
    CountryRouteID: ['', Validators.required],
    CountryID: ['', Validators.required],
    SMSRouteID: ['', Validators.required],
    Rate: ['', Validators.required]
  });
  showModal = false;

  constructor(
    private api: ApiService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loadCoutryRoutes();

    // get all countries
    this.countries = this.api.get('country/list', {}, false);

    // get routes
    this.routes = this.api.get('route', {}, true).map(m => m.Data);
  }

  ngOnDestroy() {
    this.$subscription.unsubscribe();
  }

  loadCoutryRoutes() {
    //get default coutry routes
    this.countryRotes = this.api.get('countryroute', {}, true).map(m => m.Data);

    // get countries that does not have default route
    this.countriesWithoutDefaultRoute = this.api.get('country/nodefault', {}, false);
  }

  add() {

    const body = {
      CountryID: this.countryRouteForm.controls['CountryID'].value,
      SMSRouteID: this.countryRouteForm.controls['SMSRouteID'].value,
      Rate: this.countryRouteForm.controls['Rate'].value
    };

    this.api.post('countryroute', body, true)
      .subscribe(
        res => {

          if (res.Success === true) {
            this.loadCoutryRoutes();
          }
        },
        err => console.log(err));
  }

  delete(id) {

    this.$subscription.add(this.api.delete('countryroute/' + id, true)
      .map(res => res.json())
      .subscribe(
        res => {
          if (res.Success === true)
            this.loadCoutryRoutes();
        },
        err => console.log(err)));
  }

  edit() {

    const body = {
      CountryRouteID: this.editCountryRouteForm.controls['CountryRouteID'].value,
      SMSRouteID: this.editCountryRouteForm.controls['SMSRouteID'].value,
      CountryID: this.editCountryRouteForm.controls['CountryID'].value,
      Rate: this.editCountryRouteForm.controls['Rate'].value
    };

    this.api.patch('countryroute', body, true)
      .subscribe(
        res => {
          if (res.Success === true)
            this.loadCoutryRoutes();
        },
        err => console.log(err));

    this.showModal = false;
  }

  showEditModal(countryRoute: any) {
    
    this.editCountryRouteForm.patchValue({
      CountryRouteID: countryRoute.CountryRouteID,
      CountryID: countryRoute.CountryID,
      SMSRouteID: countryRoute.SMSRouteID,
      Rate: countryRoute.Rate
    });
    this.showModal = true;
  }

}
