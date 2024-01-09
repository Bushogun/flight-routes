import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalFormat'
})
export class DecimalFormatPipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (value || value === 0) {
      return value.toFixed(2);
    }
    return '';
  }
}
