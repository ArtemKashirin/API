import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clild-content',
  templateUrl: './clild-content.component.html',
  styleUrls: ['./clild-content.component.scss']
})
export class ClildContentComponent implements OnInit {
public child: string = 'Child';
  constructor() { }

  ngOnInit(): void {
  }

}
