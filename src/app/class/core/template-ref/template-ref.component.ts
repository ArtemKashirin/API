import {Component, ElementRef, EmbeddedViewRef, OnInit, TemplateRef, ViewChild, ViewRef} from '@angular/core';


@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.scss']
})
export class TemplateRefComponent implements OnInit {
  public TemplateRef: string = 'https://angular.io/api/core/TemplateRef';
  public tr: TemplateRef<any>
  @ViewChild('abc') abc: TemplateRef<any>
  @ViewChild('def') def: ElementRef;
  constructor() {
  }

  ngOnInit(): void {
  }

  show() {
    let qw: EmbeddedViewRef<ViewRef> = this.abc.createEmbeddedView(this.def)
    console.log(qw);
    console.log(this.def)
  }
}
