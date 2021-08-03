import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {
  public FormControl: string = 'https://angular.io/api/forms/FormControl';

  constructor() {
  }

  ngOnInit(): void {
  }

}
