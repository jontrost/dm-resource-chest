import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchDataService } from './search-data.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { TextHighlightService } from './text-highlight.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  posts$: Observable<any>;
  hide: boolean = false;
  inputStreamSub: Subscription;
  input = new FormControl('');

  constructor(private searchDataService: SearchDataService, private router: Router, private highlightService: TextHighlightService) {}

  search(searchTerm: string) {
    if (searchTerm) {
      this.posts$ = this.searchDataService.getSearchResults(searchTerm.toLowerCase());
      this.highlightService.textToHighlight = searchTerm;
    }
  }

  hideResults() {
    setTimeout(() => {
      this.hide = true;
    }, 180);
  }

  showResults() {
    this.hide = false;
  }

  ngOnInit(): void {
    this.inputStreamSub = this.input.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(500)
    ).subscribe(term => this.search(term));
  }

  ngOnDestroy(): void {
    this.inputStreamSub.unsubscribe();
  }
}
