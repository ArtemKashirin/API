import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-change-detector-ref',
  templateUrl: './change-detector-ref.component.html',
  styleUrls: ['./change-detector-ref.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectorRefComponent implements OnInit {
  public ChangeDetectorRef: string = 'https://angular.io/api/core/ChangeDetectorRef';
  public inc: number = 0;

  constructor(private changes: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    // console.log(this.changes);
    // setInterval(() => this.inc++, 1000)
  }

  markForCheck() {
    // @Component разкомментируй changeDetection: ChangeDetectionStrategy.OnPush
    this.changes.markForCheck();
  }

  detach() {
    this.changes.detach()
  }

  detectChanges() {
    this.changes.detectChanges()
  }

  checkNoChanges() {
    this.changes.checkNoChanges()
  }

  reattach() {
    this.changes.reattach()
  }
}
