import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-min-length-validator',
  templateUrl: './min-length-validator.component.html',
  styleUrls: ['./min-length-validator.component.scss']
})
export class MinLengthValidatorComponent implements OnInit {
  public MinLengthValidator: string = 'https://angular.io/api/forms/MinLengthValidator';
  public MaxLengthValidator: string = 'https://angular.io/api/forms/MaxLengthValidator';
  public MinValidator: string = 'https://angular.io/api/forms/MinValidator';
  public MaxValidator: string = 'https://angular.io/api/forms/MaxValidator';
  public PatternValidator: string = 'https://angular.io/api/forms/PatternValidator';
  public RequiredValidator: string = 'https://angular.io/api/forms/RequiredValidator';
  public EmailValidator: string = 'https://angular.io/api/forms/EmailValidator';
  public CheckboxRequiredValidator: string = 'https://angular.io/api/forms/CheckboxRequiredValidator';


  public minLV: FormControl = new FormControl('123');
  public maxLV: FormControl = new FormControl('Ivann');
  public minV: FormControl = new FormControl();
  public maxV: FormControl = new FormControl();
  public patV: FormControl = new FormControl('123');
  public reqV: FormControl = new FormControl('');
  public emailV: FormControl = new FormControl('ivan@mail.ru');
  public checkBRV: FormControl = new FormControl()

  constructor() {
  }

  ngOnInit(): void {
  }

}
