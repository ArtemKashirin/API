import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-select-option',
  templateUrl: './ng-select-option.component.html',
  styleUrls: ['./ng-select-option.component.scss']
})
export class NgSelectOptionComponent implements OnInit {
  public NgSelectOption: string = 'https://angular.io/api/forms/NgSelectOption';

  constructor() {
  }

  ngOnInit(): void {
  }

}
