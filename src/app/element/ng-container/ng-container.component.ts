import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.scss']
})
export class NgContainerComponent implements OnInit {
  public ngContainer: string = 'https://angular.io/api/core/ng-container';
  public users = [{
    firstName: 'ivan',
    lastName: 'ivanov',
    age: '20',
    city: 'moscow'
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
