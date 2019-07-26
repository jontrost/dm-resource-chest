import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class TextHighlightService {
	textToHighlight: string;
	showHighlight: boolean = true;
}
