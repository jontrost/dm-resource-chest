import { Component, OnInit } from '@angular/core';
import { MagicItemComponent } from '../magic-item/magic-item.component';
import { MagicItemsDataService} from '../magic-items-data.service';

@Component({
  selector: 'app-magic-items-page',
  templateUrl: './magic-items-page.component.html',
  styleUrls: ['./magic-items-page.component.scss'],
  providers: [MagicItemsDataService]
})
export class MagicItemsPageComponent implements OnInit {

  posts: MagicItemComponent[];

  constructor(private magicItemsDataService: MagicItemsDataService) { 
  
  }

  ngOnInit() {
    this.posts = this.magicItemsDataService.getPosts();
  }

}
