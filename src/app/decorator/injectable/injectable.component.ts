import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-injectable',
  templateUrl: './injectable.component.html',
  styleUrls: ['./injectable.component.scss']
})
export class InjectableComponent implements OnInit {
  public Injectable: string = 'https://angular.io/api/core/Injectable';

  constructor() {
  }

  ngOnInit(): void {
  }

}
