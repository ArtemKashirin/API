import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-router-state-snapshot',
  templateUrl: './router-state-snapshot.component.html',
  styleUrls: ['./router-state-snapshot.component.scss']
})
export class RouterStateSnapshotComponent implements OnInit {
  public RouterStateSnapshot: string = 'https://angular.io/api/router/RouterStateSnapshot';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // console.log(this.router.routerState.snapshot);
  }

}
