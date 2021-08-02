import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-control',
  templateUrl: './ng-control.component.html',
  styleUrls: ['./ng-control.component.scss']
})
export class NgControlComponent implements OnInit {
  public NgControl: string = 'https://angular.io/api/forms/NgControl';

  constructor() {
  }

  ngOnInit(): void {
  }

}
