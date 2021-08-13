import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";

@Component({
  selector: 'app-activated-route-snapshot',
  templateUrl: './activated-route-snapshot.component.html',
  styleUrls: ['./activated-route-snapshot.component.scss']
})
export class ActivatedRouteSnapshotComponent implements OnInit {
  public ActivatedRouteSnapshot: string = 'https://angular.io/api/router/ActivatedRouteSnapshot';

  constructor(private activRoute: ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {
    // console.log(this.activRoute.snapshot);
    // console.log(this.router.routerState.root);
  }

}
