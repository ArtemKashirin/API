import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-abstract-form-group-directive',
  templateUrl: './abstract-form-group-directive.component.html',
  styleUrls: ['./abstract-form-group-directive.component.scss']
})
export class AbstractFormGroupDirectiveComponent implements OnInit {
  public AbstractFormGroupDirective: string = 'https://angular.io/api/forms/AbstractFormGroupDirective';

  constructor() {
  }

  ngOnInit(): void {
  }

}
