import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss']
})
export class RouterComponent implements OnInit {
  public Router: string = 'https://angular.io/api/router/Router';

  constructor() {
  }

  ngOnInit(): void {
  }

}
