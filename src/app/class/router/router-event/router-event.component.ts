import {Component, OnInit} from '@angular/core';
import {Router, RouterEvent} from "@angular/router";

@Component({
  selector: 'app-router-event',
  templateUrl: './router-event.component.html',
  styleUrls: ['./router-event.component.scss']
})
export class RouterEventComponent implements OnInit {
  public RouterEvent: string = 'https://angular.io/api/router/RouterEvent';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   console.log(event instanceof RouterEvent);
    // });
    // console.log(this.router.events);
  }

}
