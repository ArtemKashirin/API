import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-renderer2',
  templateUrl: './renderer2.component.html',
  styleUrls: ['./renderer2.component.scss']
})
export class Renderer2Component implements OnInit {
  public Renderer2: string = 'https://angular.io/api/core/Renderer2';

  @ViewChild('data1') data1: ElementRef;
  @ViewChild('destroy1') destroy1: ElementRef;
  @ViewChild('createElement1') createElement1: ElementRef;
  @ViewChild('createComment1') createComment1: ElementRef;
  @ViewChild('createText1') createText1: ElementRef;
  @ViewChild('appendChild1') appendChild1: ElementRef;
  @ViewChild('insertBefore1') insertBefore1: ElementRef;
  @ViewChild('removeChild1') removeChild1: ElementRef;
  @ViewChild('selectRootElement1') selectRootElement1: ElementRef;
  @ViewChild('parentNode1') parentNode1: ElementRef;
  @ViewChild('nextSibling1') nextSibling1: ElementRef;
  @ViewChild('setAttribute1') setAttribute1: ElementRef;
  @ViewChild('removeAttribute1') removeAttribute1: ElementRef;
  @ViewChild('addClass1') addClass1: ElementRef;
  @ViewChild('removeClass1') removeClass1: ElementRef;
  @ViewChild('setStyle1') setStyle1: ElementRef;
  @ViewChild('removeStyle1') removeStyle1: ElementRef;
  @ViewChild('setProperty1') setProperty1: ElementRef;
  @ViewChild('setValue1') setValue1: ElementRef;
  @ViewChild('listen1') listen1: ElementRef;
  @ViewChild('parent') parent: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  data() {
    console.log(this.renderer.data);

  }

  destroy() {


  }

  createElement(): HTMLElement {
     return this.renderer.createElement('div');
  }

  createComment() {
    console.log(this.renderer.createComment('комментарий'));

  }

  createText() {
    this.renderer.createText('This is a button');

  }

  appendChild() {
    this.renderer.appendChild(this.parent.nativeElement, this.createElement())
  }

  insertBefore() {
    this.renderer.insertBefore(this.parent.nativeElement, this.insertBefore1.nativeElement, this.appendChild1.nativeElement)
  }

  removeChild() {
    this.renderer.removeChild(this.parent.nativeElement, this.removeChild1.nativeElement)
  }

  selectRootElement() {
    console.log(this.renderer.selectRootElement(this.createElement()));
  }

  parentNode() {
    console.log(this.renderer.parentNode(this.parentNode1.nativeElement));
  }

  nextSibling() {
    console.log(this.renderer.nextSibling(this.nextSibling1.nativeElement));

  }

  setAttribute() {
    this.renderer.setAttribute(this.setAttribute1.nativeElement, 'class', 'setAttribute');

  }

  removeAttribute() {
    this.renderer.removeAttribute(this.setAttribute1.nativeElement, 'class')

  }

  addClass() {
    this.renderer.addClass(this.addClass1.nativeElement, 'class')

  }

  removeClass() {
    this.renderer.removeClass(this.addClass1.nativeElement, 'class')

  }

  setStyle() {
    this.renderer.setStyle(this.setStyle1.nativeElement, 'color', 'red')

  }

  removeStyle() {
    this.renderer.removeStyle(this.setStyle1.nativeElement, 'color')

  }

  setProperty() {
    // console.log(this.renderer.setProperty(this.setProperty1.nativeElement, 'class', '123'));?

  }

  setValue() {
    // this.renderer.setValue(this.parent.nativeElement, 'Hi')?

  }

  listen() {
  this.renderer.listen(this.listen1.nativeElement, 'click', () => console.log('click'))
  }
}
