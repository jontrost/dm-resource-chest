import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class MagicItemsDataService {

  constructor(private httpClient: HttpClient) { }

  getJSONData(): Observable<any> {
    return this.httpClient.get('../../assets/magic-items.json');
  }
}
