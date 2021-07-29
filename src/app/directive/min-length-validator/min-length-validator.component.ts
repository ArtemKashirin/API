import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-min-length-validator',
  templateUrl: './min-length-validator.component.html',
  styleUrls: ['./min-length-validator.component.scss']
})
export class MinLengthValidatorComponent implements OnInit {
  public MinLengthValidator: string = 'https://angular.io/api/forms/MinLengthValidator';
  public control1: FormControl = new FormControl('123');
  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.control1)
  }

}
