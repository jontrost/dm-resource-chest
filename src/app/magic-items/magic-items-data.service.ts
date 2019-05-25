import { Injectable } from '@angular/core';
import { MagicItemComponent } from './magic-item/magic-item.component';
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

  getPosts(): MagicItemComponent[]{
    let magicItemComponentsArray: MagicItemComponent[] = [];
    this.getJSONData().subscribe(function(value){
      for(let i = 0; i < value.posts.length; i++){
        let component = new MagicItemComponent(
          value.posts[i].title, 
          value.posts[i].description, 
          value.posts[i].type, 
          value.posts[i].details);
        magicItemComponentsArray.push(component);
      }
    });
    
    return magicItemComponentsArray;
  }

}
