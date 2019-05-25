import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.scss']
})
export class NpcComponent implements OnInit {

  name: string;
  quote: string;
  description: string;
  stats: string[];

  constructor(name: string, quote: string, description: string, stats: string[]) { 
    this.name = name;
    this.quote = quote;
    this.description = description;
    this.stats = [...stats];
  }

  ngOnInit() {
  }

}
