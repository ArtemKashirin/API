import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-children',
  templateUrl: './content-children.component.html',
  styleUrls: ['./content-children.component.scss']
})
export class ContentChildrenComponent implements OnInit {
public ContentChildren: string = 'https://angular.io/api/core/ContentChildren';
  constructor() { }

  ngOnInit(): void {
  }

}
