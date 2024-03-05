import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string | undefined | null): string {
    if (!value) return '';

    const words = value.split(' ');

    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
      if (words[i]) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      }
    }

    return words.join(' ');
  }

}
