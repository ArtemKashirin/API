import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.scss']
})
export class ValidatorsComponent implements OnInit {
  public Validators: string = 'https://angular.io/api/forms/Validators';

  constructor() {
  }

  ngOnInit(): void {
  }

}
