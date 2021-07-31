import {Component, OnInit} from '@angular/core';
import {NgForm, NgModelGroup} from "@angular/forms";

@Component({
  selector: 'app-ng-model-group',
  templateUrl: './ng-model-group.component.html',
  styleUrls: ['./ng-model-group.component.scss']
})
export class NgModelGroupComponent implements OnInit {
  public NgModelGroup: string = 'https://angular.io/api/forms/NgModelGroup';
  public name = {first: 'Nancy', last: ''};
  constructor() {
  }

  ngOnInit(): void {

  }



  onSubmit( a:NgModelGroup) {
    console.log(a)
  }

  setValue() {
    this.name = {first: 'Bess', last: 'Marvin'};
  }
}
