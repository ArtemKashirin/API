import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-default-value-accessor',
  templateUrl: './default-value-accessor.component.html',
  styleUrls: ['./default-value-accessor.component.scss']
})
export class DefaultValueAccessorComponent implements OnInit {
  public DefaultValueAccessor: string = 'https://angular.io/api/forms/DefaultValueAccessor';

  constructor() {
  }

  ngOnInit(): void {
  }

}
