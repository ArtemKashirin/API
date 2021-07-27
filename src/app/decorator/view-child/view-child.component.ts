import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  public ViewChild: string = 'https://angular.io/api/core/ViewChild';
  @ViewChild('vc') vc: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.vc.nativeElement.style.background = 'red';
  }
}
