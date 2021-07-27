import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {
  public Host: string = 'https://angular.io/api/core/Host';

  constructor() {
  }

  ngOnInit(): void {
  }

}
