import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-group-directive',
  templateUrl: './form-group-directive.component.html',
  styleUrls: ['./form-group-directive.component.scss']
})
export class FormGroupDirectiveComponent implements OnInit {
  public FormGroupDirective: string = 'https://angular.io/api/forms/FormGroupDirective';

  constructor() {
  }

  ngOnInit(): void {
  }

}
