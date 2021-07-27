import {AfterContentInit, Component, ContentChild, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-content',
  templateUrl: './child-content.component.html',
  styleUrls: ['./child-content.component.scss']
})
export class ChildContentComponent implements OnInit, AfterContentInit {
  @ContentChild('contChild') contChild: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.contChild.nativeElement.style.background = 'blue';
  }

}
