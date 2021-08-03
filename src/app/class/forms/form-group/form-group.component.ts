import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
  public FormGroup: string = 'https://angular.io/api/forms/FormGroup';
  public formGroup: FormGroup = new FormGroup({
    firstName: new FormControl('Ivan'),
    lastName: new FormControl('Ivanov'),
    age: new FormControl('35')
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  registerControl() {
    this.formGroup.registerControl('city', new FormControl('Moscow'));
    console.log(this.formGroup.value);
  }

  addControl() {
    this.formGroup.addControl('city', new FormControl('Moscow'))
    console.log(this.formGroup.value)
  }

  removeControl() {
    this.formGroup.removeControl('age');
    console.log(this.formGroup.controls);
  }

  setControl() {
    this.formGroup.setControl('fullName', new FormControl('1234'));
    console.log(this.formGroup.controls);

  }


  contains() {
    console.log(this.formGroup.contains('age'));

  }

  getRawValue() {
    console.log(this.formGroup.getRawValue());

  }

  setValue() {
    this.formGroup.controls['age'].setValue('20');

  }

  patchValue() {

  }

  reset() {
    this.formGroup.reset()
  }
}
