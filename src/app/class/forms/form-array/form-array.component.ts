import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  public FormArray: string = 'https://angular.io/api/forms/FormArray';

  public fg: FormGroup = new FormGroup({
    formArray: new FormArray([
      new FormControl('Ivan'),
      new FormControl('Ivanov'),
      new FormControl('20'),
      new FormControl('Moscow'),
      new FormControl('mael'),

    ])
  })


  constructor() {
  }

  ngOnInit(): void {

  }

  get formArray(): FormArray {
    return this.fg.get('formArray') as FormArray;
  }

  showControls(): void {
    console.log(this.fg.controls);
  }

  showLenght(): void {
    console.log(this.formArray.length);
  }

  getAt(): void {
    console.log(this.formArray.at(2));
  }

  pushControl(): void {
    this.formArray.push(new FormControl('123'));
  }

  insertControl(): void {
    this.formArray.insert(0, new FormControl('456'));
  }

  removeControl(): void {
    this.formArray.removeAt(3);
  }

  setControl(): void {
    this.formArray.setControl(2, new FormControl('789'));
  }

  getRawValue(): void {
    console.log(this.formArray.getRawValue());
  }

  clearAllControls(): void {
    this.formArray.clear();
  }

  setValue(): void {
    this.formArray.controls[0].setValue('456');
  }

  patchValue(): void {
    this.formArray.controls[0].patchValue('123')
  }

  reset(): void {
    this.formArray.controls[0].reset()
  }
}

