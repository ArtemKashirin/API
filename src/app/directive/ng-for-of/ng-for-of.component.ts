import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-for-of',
  templateUrl: './ng-for-of.component.html',
  styleUrls: ['./ng-for-of.component.scss']
})
export class NgForOfComponent implements OnInit {
  public NgForOf: string = 'https://angular.io/api/common/NgForOf';
  public arrs: number[] = [1, 2, 3, 4, 5, 6];

  constructor() {
  }

  ngOnInit(): void {
  }

}
