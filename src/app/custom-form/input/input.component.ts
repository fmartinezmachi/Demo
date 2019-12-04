import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() label? = '';
  @Input() placeholder? = '';
  @Input() error? = '';
  @Input() info? = '';
  @Input() isDisabled? = false;
  @Input() isRequired? = false;

  value: any = null;

  constructor() {}

  ngOnInit() {}

  onInput(value: string) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }
  writeValue(value: any): void {
    if (value) {
      this.value = value || null;
    } else {
      this.value = null;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onChange = (_: any) => {};
  onTouch = () => {};
}
