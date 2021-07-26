import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slice-pipe',
  templateUrl: './slice-pipe.component.html',
  styleUrls: ['./slice-pipe.component.scss']
})
export class SlicePipeComponent implements OnInit {
  public SlicePipe: string = 'https://angular.io/api/common/SlicePipe';
  public str: string = 'hello world!';

  constructor() {
  }

  ngOnInit(): void {
  }

}
