import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit, AfterViewInit {
public ngTemplate: string = 'https://angular.io/api/core/ng-template';
public bool: boolean = true;
@ViewChild('tempClassRef') tcr: TemplateRef<any>

  constructor() { }

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {
    // console.log(this.tcr)
  }

}
