import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  public Pipe: string = 'https://angular.io/api/core/Pipe';

  constructor() {
  }

  ngOnInit(): void {
  }

}
