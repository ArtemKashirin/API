import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-http-header-response',
  templateUrl: './http-header-response.component.html',
  styleUrls: ['./http-header-response.component.scss']
})
export class HttpHeaderResponseComponent implements OnInit {
  public HttpHeaderResponse: string = 'https://angular.io/api/common/http/HttpHeaderResponse';

  constructor() {
  }

  ngOnInit(): void {
  }

}
