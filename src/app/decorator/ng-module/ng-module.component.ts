import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-module',
  templateUrl: './ng-module.component.html',
  styleUrls: ['./ng-module.component.scss']
})
export class NgModuleComponent implements OnInit {
public NgModule:string = 'https://angular.io/api/core/NgModule';
  constructor() { }

  ngOnInit(): void {
  }

}
