import { Component, OnInit, forwardRef, ViewChild, ElementRef, Input } from '@angular/core';
import { BaseInput } from '../BaseInput';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent extends BaseInput<any> implements OnInit {
  @Input() showClearBtn? = false;
  @ViewChild('inputRef', { static: false }) inputRef: ElementRef;

  focused = false;

  constructor() {
    super();
  }

  ngOnInit() {}

  focusElement = () => this.inputRef.nativeElement.focus();

  onBlur = () => (this.focused = false);

  onFocus = () => (this.focused = true);

  resetValue = () => {
    this.onInput(null);
    this.focusElement();
  };
}
