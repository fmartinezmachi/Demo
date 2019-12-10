import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { BaseInput } from '../BaseInput';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss'],
})
export class InputRadioComponent extends BaseInput<boolean> implements OnInit {
  @Input() label? = '';
  @Input() checked? = false;
  @Output() radioClick = new EventEmitter<string>();

  constructor() {
    super();
  }

  ngOnInit() {}

  updateChecked = () => this.radioClick.emit(this.label);
}
