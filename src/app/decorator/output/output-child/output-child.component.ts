import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.scss']
})
export class OutputChildComponent implements OnInit {
  public name:string = 'Ivan';
  public age: number = 20;
  @Output() outEvent: EventEmitter<string | number> = new EventEmitter;

  constructor() {
  }

  ngOnInit(): void {

  }

  onClick() {
    this.outEvent.emit(this.name);
    this.outEvent.emit(this.age);

  }
}
