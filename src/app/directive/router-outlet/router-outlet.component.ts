import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-router-outlet',
  templateUrl: './router-outlet.component.html',
  styleUrls: ['./router-outlet.component.scss']
})
export class RouterOutletComponent implements OnInit {
  public RouterOutlet: string = 'https://angular.io/api/router/RouterOutlet';

  constructor() {
  }

  ngOnInit(): void {
  }

}
