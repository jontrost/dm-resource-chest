import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-item',
  templateUrl: './magic-item.component.html',
  styleUrls: ['./magic-item.component.scss']
})
export class MagicItemComponent implements OnInit {

  title: string;
  description: string;
  type: string;
  details: string;

  constructor(title: string, description: string, type: string, details: string) {
    this.title = title;
    this.description = description;
    this.type = type;
    this.details = details;
  }

  ngOnInit() {

  }

}
