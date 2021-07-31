import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-group-name',
  templateUrl: './form-group-name.component.html',
  styleUrls: ['./form-group-name.component.scss']
})
export class FormGroupNameComponent implements OnInit {
  public FormGroupName: string = 'https://angular.io/api/forms/FormGroupName';
  public form: FormGroup = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl('ivan'),
      password: new FormControl('123456')
    }),
    email: new FormControl('ivan@mail.ru')
  })
  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.form);
  }

}
