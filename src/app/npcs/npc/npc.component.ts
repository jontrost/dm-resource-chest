import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NpcsDataService } from '../npcs-data.service';
import { map } from 'rxjs/operators';
import { TextHighlightService } from 'src/app/search/text-highlight.service';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.scss']
})
export class NpcComponent implements OnInit {

  post$: Observable<any>;
  textToHighlight: string = this.text.textToHighlight;

  constructor(
    private route: ActivatedRoute,
    private service: NpcsDataService,
    private text: TextHighlightService
  ) {
  }

  ngOnInit() {
    this.post$ = this.service.getJSONData().pipe(map(value => value.posts.filter(value => value.url == this.route.snapshot.paramMap.get('url'))));
  }

}
