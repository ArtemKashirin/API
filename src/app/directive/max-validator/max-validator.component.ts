import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-max-validator',
  templateUrl: './max-validator.component.html',
  styleUrls: ['./max-validator.component.scss']
})
export class MaxValidatorComponent implements OnInit {
  public MaxValidator: string = 'https://angular.io/api/forms/MaxValidator';
  public last: FormControl = new FormControl('', Validators.max(4))

  constructor() {
  }

  ngOnInit(): void {
  }

}
