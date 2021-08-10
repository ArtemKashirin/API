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


  }

  ngOnInit(): void {
  }

  request() {
    this.http.request('GET','https://jsonplaceholder.typicode.com/posts').subscribe(request => {
      console.log('request:', request)
    })
  }

  delete() {
    this.http.delete('https://jsonplaceholder.typicode.com/posts/2').subscribe( del => {
      console.log('delete:', del)
    })

  }

  get() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe( get => {
      console.log('get:', get)
    });
  }

  head() {
    this.http.head('https://jsonplaceholder.typicode.com/posts').subscribe( head => {
      console.log('head:', head)
    });

  }

  jsonp() {

  }

  patch() {
    // this.http.patch('https://jsonplaceholder.typicode.com/posts', ).subscribe( patch => {
    //   console.log('patch:', patch)
  }

  options() {

  }

  post() {

  }

  put() {

  }
}
