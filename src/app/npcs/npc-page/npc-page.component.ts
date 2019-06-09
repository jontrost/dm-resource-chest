import { Component, OnInit } from '@angular/core';
import { NpcsDataService } from '../npcs-data.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-npc-page',
  templateUrl: './npc-page.component.html',
  styleUrls: ['./npc-page.component.scss'],
  providers: [NpcsDataService]
})
export class NpcPageComponent implements OnInit {

  posts$: Observable<any>;

  constructor(private npcsDataService: NpcsDataService) { }

  ngOnInit() {
    this.posts$ = this.npcsDataService.getJSONData().pipe(map(posts => posts.posts));
  }

}
