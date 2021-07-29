import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-control-directive',
  templateUrl: './form-control-directive.component.html',
  styleUrls: ['./form-control-directive.component.scss']
})
export class FormControlDirectiveComponent implements OnInit {
  public FormControlDirective: string = 'https://angular.io/api/forms/FormControlDirective';
  public control: FormControl = new FormControl('Ivan')

  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.control);

  }

}
