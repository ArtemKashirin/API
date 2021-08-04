import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-factory-resolver',
  templateUrl: './component-factory-resolver.component.html',
  styleUrls: ['./component-factory-resolver.component.scss']
})
export class ComponentFactoryResolverComponent implements OnInit {
  public ComponentFactoryResolver: string = 'https://angular.io/api/core/ComponentFactoryResolver';

  constructor() {
  }

  ngOnInit(): void {
  }

}
