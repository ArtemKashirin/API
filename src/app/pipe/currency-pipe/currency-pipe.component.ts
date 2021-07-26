import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-currency-pipe',
  templateUrl: './currency-pipe.component.html',
  styleUrls: ['./currency-pipe.component.scss']
})
export class CurrencyPipeComponent implements OnInit {
  public CurrencyPipe: string = 'https://angular.io/api/common/CurrencyPipe';
  public currency: number = 500;

  constructor() {
  }

  ngOnInit(): void {
  }

}
