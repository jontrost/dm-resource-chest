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

  getPosts(): PlotHookComponent[]{
    let plotHooksComponentsArray: PlotHookComponent[] = [];
    this.getJSONData().subscribe(function(value){
      for(let i = 0; i < value.posts.length; i++){
        let component = new PlotHookComponent(
          value.posts[i].title, 
          value.posts[i].content);
       plotHooksComponentsArray.push(component);
      }
    });
    
    return plotHooksComponentsArray;
  }

}
