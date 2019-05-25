import { Component, OnInit } from '@angular/core';
import { NpcComponent } from '../npc/npc.component';

@Component({
  selector: 'app-npc-page',
  templateUrl: './npc-page.component.html',
  styleUrls: ['./npc-page.component.scss']
})
export class NpcPageComponent implements OnInit {

  posts: NpcComponent[] = [new NpcComponent('name', 'quote', 'desc', ['str: 1', 'int: 2'])];

  constructor() { }

  ngOnInit() {
  }

}
