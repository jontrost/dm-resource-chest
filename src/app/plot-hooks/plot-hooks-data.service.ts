import { Injectable } from '@angular/core';
import { PlotHookComponent } from '../plot-hooks/plot-hook/plot-hook.component';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlotHooksDataService {

  constructor(private httpClient: HttpClient) { }

  getJSONData(): Observable<any> {
    return this.httpClient.get('../../assets/plot-hooks.json');
  }

}
