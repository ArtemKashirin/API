import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {
  public HttpClient: string = 'https://angular.io/api/common/http/HttpClient';

  constructor(private http: HttpClient) {
    // this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe( get => {
    //   console.log('get:', get)
    // });

  }

  ngOnInit(): void {
  }

}
