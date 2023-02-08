import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: 'radio.component.html',
})
export class AppRadioComponent {
  @Input() readonly parentGroup: FormGroup;
  @Input() readonly controlName: string;
  @Input() readonly value: any;
  @Input() readonly text: string;
  @Input() readonly id: string;
}
