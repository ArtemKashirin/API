import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-required-validator',
  templateUrl: './required-validator.component.html',
  styleUrls: ['./required-validator.component.scss']
})
export class RequiredValidatorComponent implements OnInit {
  public RequiredValidator: string = 'https://angular.io/api/forms/RequiredValidator';
  public name: FormControl = new FormControl('')
  constructor() {
  }

  ngOnInit(): void {
  }

}
