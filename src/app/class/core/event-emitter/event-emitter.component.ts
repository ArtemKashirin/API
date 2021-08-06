import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.scss']
})
export class EventEmitterComponent implements OnInit {
  public EventEmitter: string = 'https://angular.io/api/core/EventEmitter';

  constructor() {
  }

  ngOnInit(): void {
  }

}
