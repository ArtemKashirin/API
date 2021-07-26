import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-upper-case-pipe',
  templateUrl: './upper-case-pipe.component.html',
  styleUrls: ['./upper-case-pipe.component.scss']
})
export class UpperCasePipeComponent implements OnInit {
  public UpperCasePipe: string = 'https://angular.io/api/common/UpperCasePipe';
  public nameUser: string = 'ivan';

  constructor() {
  }

  ngOnInit(): void {
  }

}
