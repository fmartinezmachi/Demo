import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextComponent } from './input-text/input-text.component';
import { InputRadioComponent } from './input-radio-group/input-radio/input-radio.component';
import { InputRadioGroupComponent } from './input-radio-group/input-radio-group.component';
import { InputFileComponent } from './input-file/input-file.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InputTextComponent,
    InputRadioComponent,
    InputRadioGroupComponent,
    InputFileComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [InputTextComponent, InputRadioComponent, InputRadioGroupComponent, InputFileComponent],
})
export class CustomFormModule {}
