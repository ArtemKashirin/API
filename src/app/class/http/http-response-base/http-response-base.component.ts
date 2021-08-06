import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-http-response-base',
  templateUrl: './http-response-base.component.html',
  styleUrls: ['./http-response-base.component.scss']
})
export class HttpResponseBaseComponent implements OnInit {
  public HttpResponseBase: string = 'https://angular.io/api/common/http/HttpResponseBase';

  constructor() {
  }

  ngOnInit(): void {
  }

}
