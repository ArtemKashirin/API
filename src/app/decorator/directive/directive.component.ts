import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {
  public Directive: string = 'https://angular.io/api/core/Directive';

  constructor() {
  }

  ngOnInit(): void {
  }

}
