import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-control-name',
  templateUrl: './form-control-name.component.html',
  styleUrls: ['./form-control-name.component.scss']
})
export class FormControlNameComponent implements OnInit {
  public FormControlName: string = 'https://angular.io/api/forms/FormControlName';
  public name2: FormGroup = new FormGroup({
    lastName: new FormControl('Ivanov'),
  })

  constructor() {
  }

  ngOnInit(): void {
  }

}
