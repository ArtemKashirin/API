import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-array-name',
  templateUrl: './form-array-name.component.html',
  styleUrls: ['./form-array-name.component.scss']
})
export class FormArrayNameComponent implements OnInit {
  public FormArrayName: string = 'https://angular.io/api/forms/FormArrayName';
  public form: FormGroup = new FormGroup({
    cities: new FormArray([
      new FormControl('SF'),
      new FormControl('NY')
    ])
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  get cities(): FormArray {
    return this.form.get('cities') as FormArray;
  }
}
