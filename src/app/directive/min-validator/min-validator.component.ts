import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-min-validator',
  templateUrl: './min-validator.component.html',
  styleUrls: ['./min-validator.component.scss']
})
export class MinValidatorComponent implements OnInit {
  public MinValidator: string = 'https://angular.io/api/forms/MinValidator';
  public lastName:FormControl = new FormControl('', [Validators.min(6), Validators.required])
  constructor() {
  }

  ngOnInit(): void {
  }

}
