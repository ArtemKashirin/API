import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent implements OnInit {
  public NgModel: string = 'https://angular.io/api/forms/NgModel';

  constructor() {
  }

  ngOnInit(): void {
  }

}
