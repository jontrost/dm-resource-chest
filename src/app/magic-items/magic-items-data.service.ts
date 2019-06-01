import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from '../../../node_modules/rxjs';
import { magicItemPost } from './models/magic-item-post';

@Injectable({
  providedIn: 'root'
})
export class MagicItemsDataService {

  constructor(private httpClient: HttpClient) { }

  getJSONData(): Observable<any> {
    return this.httpClient.get('../../assets/magic-items.json');
  }

  getPosts(): magicItemPost[]{
    let magicItemPostsArray: magicItemPost[] = [];
    this.getJSONData().subscribe(function(value){
      for(let i = 0; i < value.posts.length; i++){
        let newPost = new magicItemPost(
          value.posts[i].title, 
          value.posts[i].description, 
          value.posts[i].type, 
          value.posts[i].details);
        magicItemPostsArray.push(newPost);
      }
    });
    return magicItemPostsArray;
  }

  getPostByTitle(titleToSearch: string): magicItemPost {
    this.getJSONData().subscribe(function(value){
      for(let i = 0; i < value.posts.length; i++){
        if(value.posts[i].title === titleToSearch){
          let newPost = new magicItemPost(
            value.posts[i].title, 
            value.posts[i].description, 
            value.posts[i].type, 
            value.posts[i].details);
            return newPost;
        }
      }
    });
    return;
  }

}
