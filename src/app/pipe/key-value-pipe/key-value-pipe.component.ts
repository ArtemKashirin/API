import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-key-value-pipe',
  templateUrl: './key-value-pipe.component.html',
  styleUrls: ['./key-value-pipe.component.scss']
})
export class KeyValuePipeComponent implements OnInit {
  public KeyValuePipe: string = 'https://angular.io/api/common/KeyValuePipe';
  public object: {[key: number]: string} = {2: 'foo', 1: 'bar'};

  constructor() {
  }

  ngOnInit(): void {
  }

}
