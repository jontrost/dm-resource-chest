import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NpcsDataService } from '../npcs-data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.scss']
})
export class NpcComponent implements OnInit {

  post$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private service: NpcsDataService
  ) {
  }

  ngOnInit() {
    this.post$ = this.service.getJSONData().pipe(map(value => value.posts.filter(value => value.url == this.route.snapshot.paramMap.get('url'))));
  }

}
