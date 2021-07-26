import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-json-pipe',
  templateUrl: './json-pipe.component.html',
  styleUrls: ['./json-pipe.component.scss']
})
export class JsonPipeComponent implements OnInit {
  public JsonPipe: string = 'https://angular.io/api/common/JsonPipe';
  public user = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 21
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
