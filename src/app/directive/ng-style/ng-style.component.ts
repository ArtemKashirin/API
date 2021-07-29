import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {
  public NgStyle: string = 'https://angular.io/api/common/NgStyle';
  public color: string = 'green';
  public size: number = 500;
  public exp = {
    'font-style': 'italic',
    'font-size': '30px'
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
