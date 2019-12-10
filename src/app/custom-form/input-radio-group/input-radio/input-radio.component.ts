import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { BaseInput } from '../../BaseInput';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss'],
})
export class InputRadioComponent implements OnInit {
  @Input() selected = false;
  @Input() label = '';
  @Input() value = '';
  @Output() radioClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  updateChecked = () => this.radioClick.emit(this.value);
}
