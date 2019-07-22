import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MagicItemsDataService } from '../magic-items-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TextHighlightService } from 'src/app/search/text-highlight.service';

@Component({
  selector: 'app-magic-item',
  templateUrl: './magic-item.component.html',
  styleUrls: ['./magic-item.component.scss']
})
export class MagicItemComponent implements OnInit {

  post$: Observable<any>;
  filteredPosts$: Observable<any>;
  typesToShow;
  raritiesToShow;
  textToHighlight: string = this.text.textToHighlight;

  constructor(
    private route: ActivatedRoute,
    private service: MagicItemsDataService,
    private text: TextHighlightService
  ) {
  }

  ngOnInit() {
    this.post$ = this.service.getJSONData().pipe(map(value => value.posts.filter(value => value.url == this.route.snapshot.paramMap.get('url'))));
  }

}
