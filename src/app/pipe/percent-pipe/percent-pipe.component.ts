import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-percent-pipe',
  templateUrl: './percent-pipe.component.html',
  styleUrls: ['./percent-pipe.component.scss']
})
export class PercentPipeComponent implements OnInit {
  public PercentPipe: string = 'https://angular.io/api/common/PercentPipe';
  public percent: number = 0.44;

    constructor() {
}

ngOnInit():void {}

}
