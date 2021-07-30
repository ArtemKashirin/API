import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-select-control-value-accessor',
  templateUrl: './select-control-value-accessor.component.html',
  styleUrls: ['./select-control-value-accessor.component.scss']
})
export class SelectControlValueAccessorComponent implements OnInit {
  public SelectControlValueAccessor: string = 'https://angular.io/api/forms/SelectControlValueAccessor';
  states = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];

  form = new FormGroup({
    state: new FormControl(this.states[3]),
  });
  constructor() {
  }

  ngOnInit(): void {
  }

}
