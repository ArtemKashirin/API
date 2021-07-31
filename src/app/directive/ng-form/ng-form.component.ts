import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.scss']
})
export class NgFormComponent implements OnInit {
  public NgForm: string = 'https://angular.io/api/forms/NgForm';

  constructor() {
  }

  ngOnInit(): void {
  }

  log(form: any) {
    // console.log(form)
    // console.log(form.submitted);
    console.log(form.control);
    // console.log(form.controls);

  }
}
