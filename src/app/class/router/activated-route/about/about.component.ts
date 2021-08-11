import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../../../../app.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  routerState() {
    console.log(this.router.routerState);
  }

  errorHandler() {
    console.log(this.router.errorHandler);
  }

  navigated() {
    console.log(this.router.navigated);
  }

  onSameUrlNavigation() {
    console.log(this.router.onSameUrlNavigation);
  }

  events() {
    console.log(this.router.events);
  }

  paramsInheritanceStrategy() {
    console.log(this.router.paramsInheritanceStrategy)
  }

  urlUpdateStrategy() {
    console.log(this.router.urlUpdateStrategy);
  }

  relativeLinkResolution() {
    console.log(this.router.relativeLinkResolution);

  }

  config() {
    console.log(this.router.config);
  }

  url() {
    console.log(this.router.url);
  }

  initialNavigation() {
    console.log(this.router.initialNavigation());
  }

  setUpLocationChangeListener() {
    console.log(this.router.setUpLocationChangeListener());
  }

  getCurrentNavigation() {
    console.log(this.router.getCurrentNavigation());
  }

  resetConfig() {
    // console.log(this.router.resetConfig([{path: 'app', component: AppComponent}]));
  }

  dispose() {
    console.log(this.router.dispose());
  }

  createUrlTree() {

  }

  navigateByUrl() {

  }

  navigate() {
    console.log(this.router.navigate(['/ActivatedRoute']));
  }

  serializeUrl() {

  }

  parseUrl() {

  }
}
