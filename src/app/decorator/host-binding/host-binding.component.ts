import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-host-binding',
  templateUrl: './host-binding.component.html',
  styleUrls: ['./host-binding.component.scss']
})
export class HostBindingComponent implements OnInit {
  public HostBinding: string = 'https://angular.io/api/core/HostBinding';

  constructor() {
  }

  ngOnInit(): void {

  }

}
