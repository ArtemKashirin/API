import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
  public Route: string = 'https://angular.io/api/router/Route';

  constructor() {
  }

  ngOnInit(): void {
  }

}
