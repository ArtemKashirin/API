import {Component, ErrorHandler, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent implements OnInit {
  public ErrorHandler: string = 'https://angular.io/api/core/ErrorHandler';
  public error: string = 'Это ошибка';
  constructor(public er:ErrorHandler) {
  }

  ngOnInit(): void {
    // this.er.handleError(this.error)
  }

}
