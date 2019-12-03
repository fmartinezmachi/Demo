import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value) {
    return value !== null ? value.slice().reverse() : value;
  }
}
