import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.scss']
})
export class DatePipeComponent implements OnInit {
  public DatePipe: string = 'https://angular.io/api/common/DatePipe';
  public date: Date | number= new Date();

  constructor() {
  }

  ngOnInit(): void {
  }

}
