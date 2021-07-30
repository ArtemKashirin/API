import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-email-validator',
  templateUrl: './email-validator.component.html',
  styleUrls: ['./email-validator.component.scss']
})
export class EmailValidatorComponent implements OnInit {
  public EmailValidator: string = 'https://angular.io/api/forms/EmailValidator';
  public email: FormControl = new FormControl('ivan');

  constructor() {
  }

  ngOnInit(): void {
  }

}
