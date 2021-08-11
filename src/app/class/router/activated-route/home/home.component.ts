import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private aRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  component() {
    console.log(this.aRoute.component);
  }

  data() {
    console.log(this.aRoute.data);
  }

  fragment() {
    console.log(this.aRoute.fragment);
  }

  outlet() {
    console.log(this.aRoute.outlet);
  }

  params() {
    console.log(this.aRoute.params);

  }

  queryParams() {
    console.log(this.aRoute.queryParams);
  }

  url() {
    console.log(this.aRoute.url);
  }

  snapshot() {
    console.log(this.aRoute.snapshot);
  }

  children() {
    console.log(this.aRoute.children);
  }

  firstChild() {
    console.log(this.aRoute.firstChild);
  }

  paramMap() {
    console.log(this.aRoute.paramMap);
  }

  parent() {
    console.log(this.aRoute.parent);
  }

  pathFromRoot() {
    console.log(this.aRoute.pathFromRoot);
  }

  queryParamMap() {
    console.log(this.aRoute.queryParamMap);
  }

  routeConfig() {
    console.log(this.aRoute.routeConfig);
  }

  root() {
    console.log(this.aRoute.root);
  }
}
