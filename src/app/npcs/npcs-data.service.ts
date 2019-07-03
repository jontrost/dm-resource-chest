import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from '../../../node_modules/rxjs';
import { Cacheable } from 'ngx-cacheable';

@Injectable({
  providedIn: 'root'
})
export class NpcsDataService {

  constructor(private httpClient: HttpClient) { }

  @Cacheable()
  getJSONData(): Observable<any> {
    return this.httpClient.get('https://dm-resource-chest-server.herokuapp.com/npcs');
  }
}
