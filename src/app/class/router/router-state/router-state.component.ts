import {Component, OnInit} from '@angular/core';
import {Route, Router, RouterState} from "@angular/router";

@Component({
  selector: 'app-router-state',
  templateUrl: './router-state.component.html',
  styleUrls: ['./router-state.component.scss']
})
export class RouterStateComponent implements OnInit {
  public RouterState: string = 'https://angular.io/api/router/RouterState';

  constructor(private router:Router) {
  }

  ngOnInit(): void {
    // console.log(this.router.routerState);
  }

}
