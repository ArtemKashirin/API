import {Component, OnInit} from '@angular/core';
import {NgForOfComponent} from "../ng-for-of/ng-for-of.component";

@Component({
  selector: 'app-ng-component-outlet',
  templateUrl: './ng-component-outlet.component.html',
  styleUrls: ['./ng-component-outlet.component.scss']
})
export class NgComponentOutletComponent implements OnInit {
  public NgComponentOutlet: string = 'https://angular.io/api/common/NgComponentOutlet';
  public a: any = NgForOfComponent
  constructor() {
  }

  ngOnInit(): void {
  }

}
