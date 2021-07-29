import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  public NgIf: string = 'https://angular.io/api/common/NgIf';
  public isCondition: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
