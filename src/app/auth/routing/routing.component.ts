import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-route',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})

export class RoutingComponent implements OnInit, OnDestroy {
  $subscription: Subscription = new Subscription();
  routes: any[];
  routesTotalRecords = 'Loading...';
  showModal = false;
  routeForm = this.fb.group({
    SMSRouteID: [''],
    SmscID: [''],
    SmscUsername: [''],
    ConnectionTypeID: [''],
    ConnectionTypeName: [''],
    ConnectionTypeQuality: [''],
    ConnectionTypeShortName: [''],
    DateCreated: ['']
  });
  connectionTypes: Observable<any>;
  modalMode: string;
  lastLazyLoadEvent: LazyLoadEvent;

  constructor(
    private api: ApiService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    //load connection types for dropdown
    this.connectionTypes = this.api.get('connectiontype', {}, true).map(r => r.Data);
  }

  ngOnDestroy() {
    this.$subscription.unsubscribe();
  }

  loadRoutesLazy(event) {

    this.lastLazyLoadEvent = event;

    let pageNumber = 1;

    if (this.routesTotalRecords)
      pageNumber = Math.floor((event.first / event.rows) + 1);

    let body = {
      pageNumber: pageNumber,
      pageSize: event.rows,
      sortingOrder: 'asc'
    };

    this.$subscription.add(this.api.get('route', body, true)
      .subscribe(data => {
        this.routes = data['Data'];
        this.routesTotalRecords = data['Total'];
      }));
  }

  onRouteRowSelect(event) {
    this.routeForm.setValue(event.data);
    this.showModal = true;
    this.modalMode = 'Edit';
  }

  onAddNewClick() {
    this.routeForm.reset();
    this.showModal = true;
    this.modalMode = 'Add';
  }

  onSubmit() {

    this.showModal = false;

    if (!this.routeForm.valid)
      return;

    const body = {
      SMSRouteID: undefined,
      SmscID: this.routeForm.controls['SmscID'].value,
      SmscUsername: this.routeForm.controls['SmscUsername'].value,
      ConnectionTypeID: this.routeForm.controls['ConnectionTypeID'].value,
    };

    //add new route
    if (this.modalMode === 'Add') {

      this.$subscription.add(this.api.post('route', body, true).subscribe(
        res => {
          if (res.Success === true) {

            //relode routes
            //need to clear data in order to make it refresh record
            this.routes = [];

            this.loadRoutesLazy(this.lastLazyLoadEvent);
          }
        },
        err => console.log(err)));
    }

    //edit route
    else {

      body.SMSRouteID = this.routeForm.controls['SMSRouteID'].value;

      this.api.patch('route', body, true)
        .subscribe(
          res => {
            if (res.Success === true) {

              //relode routes
              //need to clear data in order to make it refresh record
              this.routes = [];

              this.loadRoutesLazy(this.lastLazyLoadEvent);
            }
          },
          err => console.log(err));
    }

  }

  onDelete() {
    let SMSRouteID = this.routeForm.controls['SMSRouteID'].value;

    this.api.delete('route/' + SMSRouteID, true)
      .map(r => r.json())
      .subscribe(
        res => {
          console.log(res);
          if (res.Success === true) {

            //relode routes
            //need to clear data in order to make it refresh record
            this.routes = [];

            this.loadRoutesLazy(this.lastLazyLoadEvent);
          }
        },
        err => console.log(err));

    this.showModal = false;
  }
}
