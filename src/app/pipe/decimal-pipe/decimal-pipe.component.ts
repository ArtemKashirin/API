import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-decimal-pipe',
  templateUrl: './decimal-pipe.component.html',
  styleUrls: ['./decimal-pipe.component.scss']
})
export class DecimalPipeComponent implements OnInit {
  public DecimalPipe: string = 'https://angular.io/api/common/DecimalPipe';
  public num: number = Math.PI;

  constructor() {
  }

  ngOnInit(): void {
  }

}
