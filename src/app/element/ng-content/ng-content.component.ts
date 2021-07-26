import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.scss']
})
export class NgContentComponent implements OnInit {
  public ngContent: string = 'https://angular.io/api/core/ng-content';
  public parent: string = 'Parent';

  constructor() {
  }

  ngOnInit(): void {
  }

}
