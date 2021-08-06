import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-http-error-response',
  templateUrl: './http-error-response.component.html',
  styleUrls: ['./http-error-response.component.scss']
})
export class HttpErrorResponseComponent implements OnInit {
  public HttpErrorResponse: string = 'https://angular.io/api/common/http/HttpErrorResponse';

  constructor() {
  }

  ngOnInit(): void {
  }

}
