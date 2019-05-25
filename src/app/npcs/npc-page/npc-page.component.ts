import { Component, OnInit } from '@angular/core';
import { NpcComponent } from '../npc/npc.component';
import { NpcsDataService } from '../npcs-data.service';

@Component({
  selector: 'app-npc-page',
  templateUrl: './npc-page.component.html',
  styleUrls: ['./npc-page.component.scss']
})
export class NpcPageComponent implements OnInit {

  posts: NpcComponent[];

  constructor(private npcsDataService: NpcsDataService) { }

  ngOnInit() {
    this.posts = this.npcsDataService.getPosts();
  }

}
