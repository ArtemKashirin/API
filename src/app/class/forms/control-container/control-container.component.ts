import {Component, OnInit} from '@angular/core';
import {ControlContainer} from "@angular/forms";


@Component({
  selector: 'app-control-container',
  templateUrl: './control-container.component.html',
  styleUrls: ['./control-container.component.scss']
})
export class ControlContainerComponent implements OnInit {
  public ControlContainer: string = 'https://angular.io/api/forms/ControlContainer';
  constructor() {
  }

  ngOnInit(): void {
  }

}
