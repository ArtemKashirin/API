import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.scss']
})
export class ViewChildrenComponent implements OnInit {
public ViewChildren: string = 'https://angular.io/api/core/ViewChildren';
  constructor() { }

  ngOnInit(): void {
  }

}
