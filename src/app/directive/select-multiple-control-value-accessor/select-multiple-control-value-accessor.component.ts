import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-select-multiple-control-value-accessor',
  templateUrl: './select-multiple-control-value-accessor.component.html',
  styleUrls: ['./select-multiple-control-value-accessor.component.scss']
})
export class SelectMultipleControlValueAccessorComponent implements OnInit {
  public SelectMultipleControlValueAccessor: string = 'https://angular.io/api/forms/SelectMultipleControlValueAccessor';

  constructor() {
  }

  ngOnInit(): void {
  }

}
