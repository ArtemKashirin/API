import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-abstract-control',
  templateUrl: './abstract-control.component.html',
  styleUrls: ['./abstract-control.component.scss']
})
export class AbstractControlComponent implements OnInit {
  public AbstractControl: string = 'https://angular.io/api/forms/AbstractControl';
  public fg: FormGroup = new FormGroup({
    fullName: new FormGroup({
      firstName: new FormControl('Ivan', [Validators.required, Validators.minLength(6)]),
      lastName: new FormControl('Ivanov', [Validators.required, Validators.minLength(6)]),
    }),
    age: new FormControl('', Validators.required)
  })

  constructor() {
  }

  ngOnInit(): void {
    // console.log('parent:', this.fg.controls.age.parent);
    // this.fg.valueChanges.subscribe(elem => console.log('valueChanges:', elem));
    // this.fg.statusChanges.subscribe(elem => console.log('statusChanges:', elem));
    // console.log('root:', this.fg.root);
    // console.log('clearValidators():', this.fg.controls.age.clearValidators());
    // console.log('markAsTouched():',this.fg.get('age')?.markAsTouched(), 'touched:', this.fg.get('age')?.touched);
    // console.log('markAllAsTouched():',this.fg.markAllAsTouched(), 'touched:', this.fg.touched);
    // console.log('setValue():', this.fg.get('age')?.setValue('45'));
    // console.log('patchValue():', this.fg.get('age')?.setValue('2'));
    // console.log('reset():', this.fg.reset());
  }

}
