import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-number-value-accessor',
  templateUrl: './number-value-accessor.component.html',
  styleUrls: ['./number-value-accessor.component.scss']
})
export class NumberValueAccessorComponent implements OnInit {
  public NumberValueAccessor: string = 'https://angular.io/api/forms/NumberValueAccessor';

  constructor() {
  }

  ngOnInit(): void {
  }

}
