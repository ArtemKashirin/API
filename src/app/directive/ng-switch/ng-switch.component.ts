import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {
  public NgSwitch: string = 'https://angular.io/api/common/NgSwitch';
  public NgSwitchCase: string = 'https://angular.io/api/common/NgSwitchCase';
  public NgSwitchDefault: string = 'https://angular.io/api/common/NgSwitchDefault';
  public exp: number = 3;

  constructor() {
  }

  ngOnInit(): void {
  }

}
