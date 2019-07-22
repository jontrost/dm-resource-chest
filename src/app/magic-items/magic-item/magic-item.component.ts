import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MagicItemsDataService } from '../magic-items-data.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { TextHighlightService } from 'src/app/search/text-highlight.service';

@Component({
  selector: 'app-magic-item',
  templateUrl: './magic-item.component.html',
  styleUrls: ['./magic-item.component.scss']
})
export class MagicItemComponent implements OnInit {

  post$: Observable<any>;
  paramSub: Subscription;
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
    this.paramSub = this.route.params.subscribe(param => this.updateRoute(param['url']));
    this.post$ = this.service.getJSONData().pipe(map(value => value.posts.filter(value => value.url == this.route.snapshot.paramMap.get('url'))));
  }

  ngOnDestroy(): void {
    this.paramSub.unsubscribe();
  }

  updateRoute(url: string) {
    this.post$ = this.service.getJSONData().pipe(map(value => value.posts.filter(value => value.url == url)));
  }
}
