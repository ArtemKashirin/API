import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-pattern-validator',
  templateUrl: './pattern-validator.component.html',
  styleUrls: ['./pattern-validator.component.scss']
})
export class PatternValidatorComponent implements OnInit {
  public PatternValidator: string = 'https://angular.io/api/forms/PatternValidator';
  public name: FormControl = new FormControl('123')
  constructor() {
  }

  ngOnInit(): void {
  }

}
