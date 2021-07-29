import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  templateUrl: './ng-template-outlet.component.html',
  styleUrls: ['./ng-template-outlet.component.scss']
})
export class NgTemplateOutletComponent implements OnInit {
public NgTemplateOutlet:string = 'https://angular.io/api/common/NgTemplateOutlet';
public MyContext = {
  firstName: 'Ivan',
  lastName: 'Ivanov'
}
  constructor() { }

  ngOnInit(): void {
  }

}
