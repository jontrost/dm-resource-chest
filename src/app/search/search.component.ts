import { Component } from '@angular/core';
import { SearchDataService } from './search-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchTerm: string;

  constructor(private searchDataService: SearchDataService) { }

  //delete me
  test(): void {
    console.log(this.searchTerm);
    this.searchDataService.getSearchResults(this.searchTerm).subscribe(value => console.log(value));
  }

}
