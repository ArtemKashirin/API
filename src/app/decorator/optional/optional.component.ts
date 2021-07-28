import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.scss']
})
export class OptionalComponent implements OnInit {
  public Optional: string = 'https://angular.io/api/core/Optional';

  constructor() {
  }

  ngOnInit(): void {
  }

}
