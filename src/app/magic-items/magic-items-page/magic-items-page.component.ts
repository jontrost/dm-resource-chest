import { Component, OnInit } from '@angular/core';
import { MagicItemsDataService} from '../magic-items-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-magic-items-page',
  templateUrl: './magic-items-page.component.html',
  styleUrls: ['./magic-items-page.component.scss'],
  providers: [MagicItemsDataService]
})

export class MagicItemsPageComponent implements OnInit {

  posts$: Observable<any>;

  constructor(private magicItemsDataService: MagicItemsDataService) { 
  
  }

  ngOnInit() {
    this.posts$ = this.magicItemsDataService.getJSONData().pipe(map(posts => posts.posts));
  }

}
