import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-max-length-validator',
  templateUrl: './max-length-validator.component.html',
  styleUrls: ['./max-length-validator.component.scss']
})
export class MaxLengthValidatorComponent implements OnInit {
  public MaxLengthValidator: string = 'https://angular.io/api/forms/MaxLengthValidator';
  public name: FormControl = new FormControl('Ivann', Validators.maxLength(4))
  constructor() {
  }

  ngOnInit(): void {
  }

}
