import {Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {EmbeddedViewRefComponent} from "../embedded-view-ref/embedded-view-ref.component";

@Component({
  selector: 'app-component-factory',
  templateUrl: './component-factory.component.html',
  styleUrls: ['./component-factory.component.scss']
})
export class ComponentFactoryComponent implements OnInit {
  public ComponentFactory: string = 'https://angular.io/api/core/ComponentFactory';
  @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
  }


  createChild() {
    let qw: ComponentFactory<EmbeddedViewRefComponent> = this.resolver.resolveComponentFactory(EmbeddedViewRefComponent);
    console.log(qw.selector)
    console.log(qw.componentType)
    console.log(qw.ngContentSelectors)
    console.log(qw.inputs)
    console.log(qw.outputs)
    console.log(qw)

  }
}
