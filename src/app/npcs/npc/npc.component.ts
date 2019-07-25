import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NpcsDataService } from '../npcs-data.service';
import { map } from 'rxjs/operators';
import { TextHighlightService } from 'src/app/search/text-highlight.service';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.scss']
})
export class NpcComponent implements OnInit, OnDestroy {

  post$: Observable<any>;
  paramSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: NpcsDataService,
    private highlightService: TextHighlightService
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
