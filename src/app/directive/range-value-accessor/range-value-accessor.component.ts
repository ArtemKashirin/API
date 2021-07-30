import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-range-value-accessor',
  templateUrl: './range-value-accessor.component.html',
  styleUrls: ['./range-value-accessor.component.scss']
})
export class RangeValueAccessorComponent implements OnInit {
  public RangeValueAccessor: string = 'https://angular.io/api/forms/RangeValueAccessor';

  constructor() {
  }

  ngOnInit(): void {
  }

}
