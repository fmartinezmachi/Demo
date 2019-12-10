import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextComponent } from './input-text/input-text.component';
import { InputRadioComponent } from './input-radio-group/input-radio/input-radio.component';
import { InputRadioGroupComponent } from './input-radio-group/input-radio-group.component';

@NgModule({
  declarations: [InputTextComponent, InputRadioComponent, InputRadioGroupComponent],
  imports: [CommonModule],
  exports: [InputTextComponent, InputRadioComponent, InputRadioGroupComponent],
})
export class CustomFormModule {}
