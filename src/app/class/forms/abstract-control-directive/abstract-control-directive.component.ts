import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-abstract-control-directive',
  templateUrl: './abstract-control-directive.component.html',
  styleUrls: ['./abstract-control-directive.component.scss']
})
export class AbstractControlDirectiveComponent implements OnInit {
  public AbstractControlDirective: string = 'https://angular.io/api/forms/AbstractControlDirective';
  public fb: FormGroup = new FormGroup({
    firstName: new FormControl('Ivan'),
    lastName: new FormControl('', [Validators.minLength(2), Validators.required])
  })

  constructor() {
  }

  ngOnInit(): void {
    // this.fb.statusChanges.subscribe(val => console.log('statusChanges:', val));
    // this.fb.valueChanges.subscribe(val => console.log('valueChanges:', val));
  }

  showLogForm() {
    // console.log(this.fb)
    // console.log('control:', this.fb.controls);
    // console.log('value:', this.fb.value);
    // console.log('valid:', this.fb.valid);
    // console.log('invalid:', this.fb.invalid);
    // console.log('pending:', this.fb.pending);
    // console.log('disabled:', this.fb.disabled);
    // console.log('errors:', this.fb.errors);
    // console.log('pristine:', this.fb.pristine);
    // console.log('dirty:', this.fb.dirty);
    // console.log('touched:', this.fb.touched);
    // console.log('status:', this.fb.status);
    // console.log('untouched:', this.fb.untouched);
    // console.log('validator:', this.fb.validator);
    // console.log('asyncValidator:', this.fb.asyncValidator);
    // console.log(this.fb.get('firstName')?.validator);
    // console.log(this.fb.reset());
    // console.log(this.fb.hasError('1'));?
    // console.log(this.fb.getError('q'));?



  }
}
