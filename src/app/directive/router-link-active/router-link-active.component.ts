import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-router-link-active',
  templateUrl: './router-link-active.component.html',
  styleUrls: ['./router-link-active.component.scss']
})
export class RouterLinkActiveComponent implements OnInit {
  public RouterLinkActive: string = 'https://angular.io/api/router/RouterLinkActive';

  constructor() {
  }

  ngOnInit(): void {
  }

}
