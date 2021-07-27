import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.scss']
})
export class InputChildComponent implements OnInit {
  @Input('name') firstName: string;
  @Input() age: number;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.firstName);
    console.log(this.age)
  }

}
