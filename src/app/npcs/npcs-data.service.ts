import { Injectable } from '@angular/core';
import { NpcComponent } from './npc/npc.component';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class NpcsDataService {

  constructor(private httpClient: HttpClient) { }

  getJSONData(): Observable<any> {
    return this.httpClient.get('../../assets/npcs.json');
  }

  getPosts(): NpcComponent[]{
    let NpcComponentsArray: NpcComponent[] = [];
    this.getJSONData().subscribe(function(value){
      for(let i = 0; i < value.posts.length; i++){
        let component = new NpcComponent(
          value.posts[i].name, 
          value.posts[i].quote, 
          value.posts[i].quoteAuthor, 
          value.posts[i].description,
          value.posts[i].stats);
        NpcComponentsArray.push(component);
      }
    });
    
    return NpcComponentsArray;
  }

}
