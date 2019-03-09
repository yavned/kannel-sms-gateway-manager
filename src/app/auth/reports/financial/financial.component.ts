import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sms-financial-dashboard',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})

export class FinancialComponent implements OnInit, OnDestroy {

  data: any[]
  constructor() {
    this.data = [{
      from: 'Shehu',
      type: 'Pay Pal',
      date: '16/06/2010',
      amount: '100',
      status: 'confirmed'
    },
    {
      from: 'Aleksandar',
      type: 'Visa',
      date: '16/06/2013',
      amount: '10',
      status: 'failed'
    },
    {
      from: 'Yaroslav',
      type: 'Master Card',
      date: '16/06/2018',
      amount: '600',
      status: 'confirmed'
    }]
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
