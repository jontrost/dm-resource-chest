import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from "@angular/core";
import { SearchDataService } from "./search-data.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { distinctUntilChanged, debounceTime } from "rxjs/operators";
import { TextHighlightService } from "./text-highlight.service";
import { UntypedFormControl } from "@angular/forms";

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit, OnDestroy {
	posts$: Observable<any>;
	hide: boolean = true;
	inputStreamSub: Subscription;
	input = new UntypedFormControl("");
	wideDisplay: boolean = true;

	@ViewChild("searchElement", { static: false }) searchElement: ElementRef<HTMLElement>;

	constructor(
		private searchDataService: SearchDataService,
		private router: Router,
		private highlightService: TextHighlightService
	) { }

	search(searchTerm: string) {
		if (searchTerm) {
			this.highlightService.textToHighlight = searchTerm;
			this.posts$ = this.searchDataService.getSearchResults(searchTerm.toLowerCase());
		} else {
			this.posts$ = null;
		}
	}

	hideResults($event) {
		if (!this.searchElement.nativeElement.contains($event.relatedTarget)) {
			setTimeout(() => {
				this.hide = true;
				this.wideDisplay = false;
			}, 180);
		}
	}

	showResults() {
		this.hide = false;
		this.wideDisplay = true;
	}

	resetHighlight() {
		this.highlightService.showHighlight = true;
	}

	ngOnInit(): void {
		this.inputStreamSub = this.input.valueChanges
			.pipe(
				distinctUntilChanged(),
				debounceTime(500)
			)
			.subscribe(term => this.search(term));
	}

	ngOnDestroy(): void {
		this.inputStreamSub.unsubscribe();
	}
}
