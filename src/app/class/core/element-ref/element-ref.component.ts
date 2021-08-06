import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrls: ['./element-ref.component.scss']
})
export class ElementRefComponent implements OnInit {
  public ElementRef: string = 'https://angular.io/api/core/ElementRef';

  constructor() {
  }

  ngOnInit(): void {
  }

}
