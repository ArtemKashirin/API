import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-title-case-pipe',
  templateUrl: './title-case-pipe.component.html',
  styleUrls: ['./title-case-pipe.component.scss']
})
export class TitleCasePipeComponent implements OnInit {
  public TitleCasePipe: string = 'https://angular.io/api/common/TitleCasePipe';
  public titleString: string = 'hello world';

  constructor() {
  }

  ngOnInit(): void {
  }

}
