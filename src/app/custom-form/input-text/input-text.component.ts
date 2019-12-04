import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { InputComponent } from './../input/input.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent extends InputComponent implements OnInit {
  @Input() label: string;
  constructor() {
    super();
  }

  ngOnInit() {}
}
