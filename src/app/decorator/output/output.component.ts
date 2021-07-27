import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  public output: string = 'https://angular.io/api/core/Output';
  public res: string;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.res)
  }

  outputRes($event: string | number) {
    console.log($event)

  }
}
