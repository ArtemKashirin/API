import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-http-headers',
  templateUrl: './http-headers.component.html',
  styleUrls: ['./http-headers.component.scss']
})
export class HttpHeadersComponent implements OnInit {
  public HttpHeaders: string = 'https://angular.io/api/common/http/HttpHeaders';

  constructor() {
  }

  ngOnInit(): void {
  }

}
