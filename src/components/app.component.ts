import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  //standalone: true,
  //imports: [CommonModule, ReactiveFormsModule],
  providers: [],
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
