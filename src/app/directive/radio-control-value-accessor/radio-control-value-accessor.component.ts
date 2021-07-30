import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-radio-control-value-accessor',
  templateUrl: './radio-control-value-accessor.component.html',
  styleUrls: ['./radio-control-value-accessor.component.scss']
})
export class RadioControlValueAccessorComponent implements OnInit {
  public RadioControlValueAccessor: string = 'https://angular.io/api/forms/RadioControlValueAccessor';

  constructor() {
  }

  ngOnInit(): void {
  }

}
