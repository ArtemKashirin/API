import {Component, OnInit} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent implements OnInit {
  public NgModel: string = 'https://angular.io/api/forms/NgModel';
  name: string = '';
  constructor() {
  }

  ngOnInit(): void {
  }

  setValue(ctrl: NgModel) {
    // console.log(ctrl)
    console.log(ctrl)

  }
}
