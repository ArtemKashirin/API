import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.scss']
})
export class SelfComponent implements OnInit {
  public Self: string = 'https://angular.io/api/core/Self';

  constructor() {
  }

  ngOnInit(): void {
  }

}
