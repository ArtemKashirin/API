import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-host-listener',
  templateUrl: './host-listener.component.html',
  styleUrls: ['./host-listener.component.scss']
})
export class HostListenerComponent implements OnInit {
  public HostListener: string = 'https://angular.io/api/core/HostListener';
  public click: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event.target']) sumClick(btn: HTMLElement){
    console.log(btn)
    this.click++
  }

  onClick() {
    console.log(this.click)

  }
}
