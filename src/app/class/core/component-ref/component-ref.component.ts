import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ComponentFactoryComponent} from "../component-factory/component-factory.component";
import {TemplateRefComponent} from "../template-ref/template-ref.component";

@Component({
  selector: 'app-component-ref',
  templateUrl: './component-ref.component.html',
  styleUrls: ['./component-ref.component.scss']
})
export class ComponentRefComponent implements OnInit {
  public ComponentRef: string = 'https://angular.io/api/core/ComponentRef';
  public componentFactory: ComponentFactory<TemplateRefComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, public vcr: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(TemplateRefComponent);
    // const asd: ComponentRef<TemplateRefComponent> = this.vcr.createComponent(this.componentFactory);
    // console.log(asd.location)
    // console.log(asd.injector)
    // console.log(asd.instance)
    // console.log(asd.hostView)
    // console.log(asd.changeDetectorRef)
    // console.log(asd.componentType)
    // console.log(asd.destroy())




  }

}
