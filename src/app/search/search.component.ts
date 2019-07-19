import { Component } from '@angular/core';
import { SearchDataService } from './search-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  posts$: Observable<any>;
  searchTerm: string;

  constructor(private searchDataService: SearchDataService) { }

  search() {
    this.posts$ = this.searchDataService.getSearchResults(this.searchTerm.toLowerCase());
  }
}
