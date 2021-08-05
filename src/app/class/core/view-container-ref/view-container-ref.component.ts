import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewRef} from '@angular/core';
import {ComponentFactoryComponent} from "../component-factory/component-factory.component";

@Component({
  selector: 'app-view-container-ref',
  templateUrl: './view-container-ref.component.html',
  styleUrls: ['./view-container-ref.component.scss']
})
export class ViewContainerRefComponent implements OnInit {
  public ViewContainerRef: string = 'https://angular.io/api/core/ViewContainerRef';
  @ViewChild('asd', {read: ViewContainerRef}) private vcr: ViewContainerRef;
  @ViewChild('tr', {read: TemplateRef}) private tr: TemplateRef<any>;
  public embeddedView: EmbeddedViewRef<ViewRef>;
  public componentFactory: ComponentFactory<ComponentFactoryComponent>;
  public componentRef: ComponentRef<ComponentFactoryComponent>;

  constructor(private cfr: ComponentFactoryResolver) {
  }


  ngOnInit(): void {
  }

  createEmbeddedView() {
    this.embeddedView = this.vcr.createEmbeddedView(this.tr)
    console.log(this.embeddedView)
  }

  createComponent() {

    this.componentFactory = this.cfr.resolveComponentFactory(ComponentFactoryComponent)
    this.componentRef = this.vcr.createComponent(this.componentFactory)

  }

  element() {
    console.log(this.vcr.element)

  }

  injector() {
    console.log(this.vcr.injector);

  }

  length() {
    console.log(this.vcr.length);

  }

  get() {
    console.log(this.vcr.get(1));

  }


  insert() {
    this.embeddedView = this.vcr.createEmbeddedView(this.tr)
    console.log(this.vcr.insert(this.embeddedView));

  }

  move() {
    this.embeddedView = this.vcr.createEmbeddedView(this.tr)
    this.vcr.move(this.embeddedView, 1)

  }

  remove() {
    this.vcr.remove(1)

  }

  detach() {
    this.vcr.detach(1)

  }

  clear() {
    this.vcr.clear()
  }
}
