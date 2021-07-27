import {AfterContentInit, Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss']
})
export class ContentChildComponent implements OnInit, AfterContentInit {
  public ContentChild: string = 'https://angular.io/api/core/ContentChild';

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
  }


}
