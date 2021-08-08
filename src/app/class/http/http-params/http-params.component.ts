import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-http-params',
  templateUrl: './http-params.component.html',
  styleUrls: ['./http-params.component.scss']
})
export class HttpParamsComponent implements OnInit {
  public HttpParams: string = 'https://angular.io/api/common/http/HttpParams';

  constructor() {
  }

  ngOnInit(): void {
  }

}
