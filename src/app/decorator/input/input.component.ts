import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  public Input: string = 'https://angular.io/api/core/Input';
  public name:string = 'Ivan';
  public age: number = 20;

  constructor() {
  }

  ngOnInit(): void {
  }

}
