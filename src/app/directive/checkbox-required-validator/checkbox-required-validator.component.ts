import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-checkbox-required-validator',
  templateUrl: './checkbox-required-validator.component.html',
  styleUrls: ['./checkbox-required-validator.component.scss']
})
export class CheckboxRequiredValidatorComponent implements OnInit {
  public CheckboxRequiredValidator: string = 'https://angular.io/api/forms/CheckboxRequiredValidator';
  public lastName: FormControl = new FormControl()
  constructor() {
  }

  ngOnInit(): void {
  }

}
