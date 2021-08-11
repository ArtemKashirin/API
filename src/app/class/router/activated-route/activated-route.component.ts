import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-activated-route',
  templateUrl: './activated-route.component.html',
  styleUrls: ['./activated-route.component.scss']
})
export class ActivatedRouteComponent implements OnInit {
  public ActivatedRoute: string = 'https://angular.io/api/router/ActivatedRoute';

  constructor() {
  }

  ngOnInit(): void {

  }

}
