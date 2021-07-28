import {AfterContentInit, Component, ContentChildren, ElementRef, OnInit, QueryList} from '@angular/core';

@Component({
  selector: 'app-content-children-child',
  templateUrl: './content-children-child.component.html',
  styleUrls: ['./content-children-child.component.scss']
})
export class ContentChildrenChildComponent implements OnInit, AfterContentInit {
@ContentChildren('a') variab:QueryList<ElementRef>
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.variab)
  }

}
