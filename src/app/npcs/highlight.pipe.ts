import { PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { TextHighlightService } from '../search/text-highlight.service';

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
    constructor(public sanitizer: DomSanitizer) {
    }
    transform(text: string, highlightService: TextHighlightService): SafeHtml {
            if (highlightService.textToHighlight && text && highlightService.showHighlight) {
            let pattern = highlightService.textToHighlight.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/, '\\$&');
            pattern = pattern.split(' ').filter((t) => {
                return t.length > 0;
            }).join('|');
            const regex = new RegExp(pattern, 'i');
            let newText = text.replace(regex, (match) => 'xxx');
            if (newText != text) {
                highlightService.showHighlight = false;
            }
            return this.sanitizer.bypassSecurityTrustHtml(
                text.replace(regex, (match) => `<span style="background-color: yellow;">${match}</span>`)
            );
            } else {
                return text;
            }
    }
}