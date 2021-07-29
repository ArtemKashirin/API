import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-plural',
  templateUrl: './ng-plural.component.html',
  styleUrls: ['./ng-plural.component.scss']
})
export class NgPluralComponent implements OnInit {
  public NgPlural: string = 'https://angular.io/api/common/NgPlural';
  public NgPluralCase: string = 'https://angular.io/api/common/NgPluralCase';
  public num: number = 4;

  constructor() {
  }

  ngOnInit(): void {
  }

}
