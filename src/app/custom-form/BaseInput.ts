import { Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export class BaseInput<T> implements ControlValueAccessor {
  @Input() label? = '';
  @Input() placeholder? = '';
  @Input() error? = '';
  @Input() info? = '';
  @Input() isDisabled? = false;
  @Input() isRequired? = false;

  value: T = null;

  onInput(value: T) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }
  writeValue(value: T): void {
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

  onChange = (_: T) => {};
  onTouch = () => {};
}
