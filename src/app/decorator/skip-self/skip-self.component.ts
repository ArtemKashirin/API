import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skip-self',
  templateUrl: './skip-self.component.html',
  styleUrls: ['./skip-self.component.scss']
})
export class SkipSelfComponent implements OnInit {
  public SkipSelf: string = 'https://angular.io/api/core/SkipSelf';

  constructor() {
  }

  ngOnInit(): void {
  }

}
