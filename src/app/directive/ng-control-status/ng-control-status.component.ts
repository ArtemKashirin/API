import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-control-status',
  templateUrl: './ng-control-status.component.html',
  styleUrls: ['./ng-control-status.component.scss']
})
export class NgControlStatusComponent implements OnInit {
  public NgControlStatus: string = 'https://angular.io/api/forms/NgControlStatus';

  constructor() {
  }

  ngOnInit(): void {
  }

}
