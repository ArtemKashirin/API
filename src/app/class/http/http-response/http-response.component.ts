import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-http-response',
  templateUrl: './http-response.component.html',
  styleUrls: ['./http-response.component.scss']
})
export class HttpResponseComponent implements OnInit {
  public HttpResponse: string = 'https://angular.io/api/common/http/HttpResponse';

  constructor() {
  }

  ngOnInit(): void {
  }

}
