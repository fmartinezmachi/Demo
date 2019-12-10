import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextComponent } from './input-text/input-text.component';
import { InputRadioComponent } from './input-radio/input-radio.component';

@NgModule({
  declarations: [InputTextComponent, InputRadioComponent],
  imports: [CommonModule],
  exports: [InputTextComponent, InputRadioComponent],
})
export class CustomFormModule {}
