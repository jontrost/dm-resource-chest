import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  constructor(private httpClient: HttpClient) { }

  getSearchResults(searchTerm: string): Observable<any> {
    const route = 'https://dm-resource-chest-server.herokuapp.com/api/search/' + searchTerm;
    return this.httpClient.get(route);
  }

}