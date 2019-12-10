import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInput } from '../BaseInput';

@Component({
  selector: 'app-input-radio-group',
  templateUrl: './input-radio-group.component.html',
  styleUrls: ['./input-radio-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioGroupComponent),
      multi: true,
    },
  ],
})
export class InputRadioGroupComponent extends BaseInput<string> implements OnInit {
  @Input() radioList: any[];

  constructor() {
    super();
  }

  onRadioClick = value => this.onInput(value);

  ngOnInit() {}
}
