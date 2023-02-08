import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      inputOption: ['', Validators.required],
    });
  }

  submitHandler() {
    console.log('is valid: ', this.formGroup.valid);
  }
}
