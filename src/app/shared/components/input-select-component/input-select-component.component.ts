import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-select-component',
  templateUrl: './input-select-component.component.html',
  styleUrls: ['./input-select-component.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSelectComponentComponent),
      multi: true,
    },
  ],
})
export class InputSelectComponentComponent implements OnInit, ControlValueAccessor {
  @Input() componentList: any[];

  onChange = any => {};
  onTouch = () => {};
  value = null;

  constructor() {}

  ngOnInit() {}

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
  changeSelection = selected => {
    this.value = this.componentList.filter((x, i) => selected[i]);
    this.onTouch();
    this.onChange(this.value);
  };
}
