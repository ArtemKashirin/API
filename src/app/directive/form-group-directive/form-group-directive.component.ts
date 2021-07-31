import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-group-directive',
  templateUrl: './form-group-directive.component.html',
  styleUrls: ['./form-group-directive.component.scss']
})
export class FormGroupDirectiveComponent implements OnInit {
  public FormGroupDirective: string = 'https://angular.io/api/forms/FormGroupDirective';
  public formGroup: FormGroup = new FormGroup({
    firstName: new FormControl('Ivan'),
    lastName: new FormControl('Ivanov')
  })
  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(){
    console.log(this.formGroup);
  }
}
