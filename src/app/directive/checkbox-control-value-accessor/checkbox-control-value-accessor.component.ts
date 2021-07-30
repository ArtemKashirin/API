import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-checkbox-control-value-accessor',
  templateUrl: './checkbox-control-value-accessor.component.html',
  styleUrls: ['./checkbox-control-value-accessor.component.scss']
})
export class CheckboxControlValueAccessorComponent implements OnInit {
  public CheckboxControlValueAccessor: string = 'https://angular.io/api/forms/CheckboxControlValueAccessor';

  constructor() {
  }

  ngOnInit(): void {
  }

}
