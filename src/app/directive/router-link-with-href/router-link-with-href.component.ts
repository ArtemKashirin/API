import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-router-link-with-href',
  templateUrl: './router-link-with-href.component.html',
  styleUrls: ['./router-link-with-href.component.scss']
})
export class RouterLinkWithHrefComponent implements OnInit {
  public RouterLinkWithHref: string = 'https://angular.io/api/router/RouterLinkWithHref';

  constructor() {
  }

  ngOnInit(): void {
  }

}
