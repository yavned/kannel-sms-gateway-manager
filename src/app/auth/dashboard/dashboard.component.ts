import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { TreeNode, Message } from 'primeng/api';

@Component({
  selector: 'sms-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardComponent implements OnInit {
    data: any;
    lineData: any;

    msgs: any[];

    constructor() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Sent SMS',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Failed SMS',
                    backgroundColor: '#ce0400',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }

        this.lineData = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'New Users',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#4bc0c0'
            },
            {
              label: 'Leaving Users',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#565656'
            }
          ]
        }
    }

    selectData(event) {
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
    }

  ngOnInit() {}
}
