import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lower-case-pipe',
  templateUrl: './lower-case-pipe.component.html',
  styleUrls: ['./lower-case-pipe.component.scss']
})
export class LowerCasePipeComponent implements OnInit {
  public LowerCasePipe: string = 'https://angular.io/api/common/LowerCasePipe';
  public nameUser: string = 'IVAN';

  constructor() {
  }

  ngOnInit(): void {
  }

}
