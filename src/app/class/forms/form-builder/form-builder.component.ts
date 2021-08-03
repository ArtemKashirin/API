import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  public FormBuilder: string = 'https://angular.io/api/forms/FormBuilder';
  public fb: FormBuilder = new FormBuilder();
  constructor() {
  }

  ngOnInit(): void {

  }

  control() {
    console.log(this.fb.group({'lastName': ['', Validators.required]}))
  }

  group() {
    console.log(this.fb.group({
      "fullName": this.fb.group({
        "fN": ['Ivan'],
        'lN': ['Ivanov']
      })
    }));
  }

  array() {
    console.log(this.fb.array(['sd', 'we', 'qq']));
  }
}
