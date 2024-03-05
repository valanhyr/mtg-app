import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string | undefined | null): string {
    if (!value) return '';

    return value.toUpperCase();
  }

}
