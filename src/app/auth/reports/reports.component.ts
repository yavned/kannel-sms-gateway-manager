import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(private Btn: ButtonModule ) { }

  ngOnInit() {
  }

}
