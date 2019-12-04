import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { InputTextComponent } from './input-text/input-text.component';

@NgModule({
  declarations: [InputComponent, InputTextComponent],
  imports: [CommonModule],
  exports: [InputComponent, InputTextComponent],
})
export class CustomFormModule {}
