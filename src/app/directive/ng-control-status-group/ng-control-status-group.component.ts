import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-control-status-group',
  templateUrl: './ng-control-status-group.component.html',
  styleUrls: ['./ng-control-status-group.component.scss']
})
export class NgControlStatusGroupComponent implements OnInit {
  public NgControlStatusGroup: string = 'https://angular.io/api/forms/NgControlStatusGroup';

  constructor() {
  }

  ngOnInit(): void {
  }

}
