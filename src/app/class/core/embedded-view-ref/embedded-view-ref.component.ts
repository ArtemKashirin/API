import {Component, ContentChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-embedded-view-ref',
  templateUrl: './embedded-view-ref.component.html',
  styleUrls: ['./embedded-view-ref.component.scss']
})
export class EmbeddedViewRefComponent implements OnInit {
  public EmbeddedViewRef: string = 'https://angular.io/api/core/EmbeddedViewRef';
  @ContentChild('tp')  tempRef: any
  constructor() {
  }


  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log(this.tempRef)
  }

}
