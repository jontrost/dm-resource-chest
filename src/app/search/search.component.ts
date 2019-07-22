import { Component, OnDestroy } from '@angular/core';
import { SearchDataService } from './search-data.service';
import { Observable, Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TextHighlightService } from './text-highlight.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy {

  posts$: Observable<any>;
  hide: boolean = false;
  searchTerm: string;
  subscription: Subscription;

  constructor(private searchDataService: SearchDataService, private router: Router, private highlightService: TextHighlightService) {}

  search() {
    this.highlightService.textToHighlight = this.searchTerm;
    this.posts$ = this.searchDataService.getSearchResults(this.searchTerm.toLowerCase());
    this.hide = false;
    this.subscription =
      this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      //location.reload();
    });
  }

  hideResults() {
    setTimeout(() => {
      this.hide = true;
    }, 200);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
