import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-change',
  templateUrl: './simple-change.component.html',
  styleUrls: ['./simple-change.component.scss']
})
export class SimpleChangeComponent implements OnInit {
  public SimpleChange: string = 'https://angular.io/api/core/SimpleChange';

  constructor() {
  }

  ngOnInit(): void {
  }

}
