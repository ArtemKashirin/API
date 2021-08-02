import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-router-link',
  templateUrl: './router-link.component.html',
  styleUrls: ['./router-link.component.scss']
})
export class RouterLinkComponent implements OnInit {
  public RouterLink: string = 'https://angular.io/api/router/RouterLink';

  constructor() {
  }

  ngOnInit(): void {
  }

}
