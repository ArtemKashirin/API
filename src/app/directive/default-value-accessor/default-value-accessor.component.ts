import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-default-value-accessor',
  templateUrl: './default-value-accessor.component.html',
  styleUrls: ['./default-value-accessor.component.scss']
})
export class DefaultValueAccessorComponent implements OnInit {
  public ControlValueAccessor: string = 'https://angular.io/api/forms/ControlValueAccessor';
  public DefaultValueAccessor: string = 'https://angular.io/api/forms/DefaultValueAccessor';
  public CheckboxControlValueAccessor: string = 'https://angular.io/api/forms/CheckboxControlValueAccessor';
  public NumberValueAccessor: string = 'https://angular.io/api/forms/NumberValueAccessor';
  public RadioControlValueAccessor: string = 'https://angular.io/api/forms/RadioControlValueAccessor';
  public RangeValueAccessor: string = 'https://angular.io/api/forms/RangeValueAccessor';
  public SelectControlValueAccessor: string = 'https://angular.io/api/forms/SelectControlValueAccessor';
  public SelectMultipleControlValueAccessor: string = 'https://angular.io/api/forms/SelectMultipleControlValueAccessor';

  constructor() {
  }

  ngOnInit(): void {
  }

}
