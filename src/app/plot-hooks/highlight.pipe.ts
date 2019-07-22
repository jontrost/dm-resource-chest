import { PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
    constructor(public sanitizer: DomSanitizer) {
    }
  transform(text: string, search): SafeHtml {
    console.log('highlight pipe called');
          if (search && text) {
            let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/, '\\$&');
            pattern = pattern.split(' ').filter((t) => {
                return t.length > 0;
            }).join('|');
            const regex = new RegExp(pattern, 'i');
            return this.sanitizer.bypassSecurityTrustHtml(
                text.replace(regex, (match) => `<span style="background-color: yellow;">${match}</span>`)
            );

        } else {
            return text;
        }
    }
}