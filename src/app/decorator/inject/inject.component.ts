import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inject',
  templateUrl: './inject.component.html',
  styleUrls: ['./inject.component.scss']
})
export class InjectComponent implements OnInit {
  public Inject: string = 'https://angular.io/api/core/Inject';

  constructor() {
  }

  ngOnInit(): void {
  }

}
