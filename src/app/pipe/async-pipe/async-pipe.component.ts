import {Component, OnInit} from '@angular/core';
import {observable, Observable} from "rxjs";

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent implements OnInit {
  public AsyncPipe: string = 'https://angular.io/api/common/AsyncPipe';
  public async: Observable<string>;

  constructor() {
  }

  ngOnInit(): void {
    this.async = new Observable( observer => {
      setTimeout(() => observer.next('artem'), 3000)
    })
  }
}
