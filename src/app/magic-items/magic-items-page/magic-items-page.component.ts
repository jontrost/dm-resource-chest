import { Component, OnInit } from '@angular/core';
import { MagicItemsDataService} from '../magic-items-data.service';
import { magicItemPost } from '../models/magic-item-post';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
@Component({
  selector: 'app-magic-items-page',
  templateUrl: './magic-items-page.component.html',
  styleUrls: ['./magic-items-page.component.scss'],
  providers: [MagicItemsDataService]
})
export class MagicItemsPageComponent implements OnInit {

  // posts: magicItemPost[];
  posts$: Observable<any>;
  

  constructor(private magicItemsDataService: MagicItemsDataService) { 
  
  }

  ngOnInit() {
    this.posts$ = this.magicItemsDataService.getJSONData().pipe(map(posts => posts.posts));
  }

}
