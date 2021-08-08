import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.scss']
})
export class HttpRequestComponent implements OnInit {
  public HttpRequest: string = 'https://angular.io/api/common/http/HttpRequest'

  constructor() {
  }

  ngOnInit(): void {
  }

}
