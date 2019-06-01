import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MagicItemsDataService } from '../magic-items-data.service';

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

  constructor(
    private route: ActivatedRoute,
    private service: MagicItemsDataService
  ) {}

  ngOnInit() {
    let title = this.route.snapshot.paramMap.get('title');
    let post = this.service.getPostByTitle(title);
    this.title = post.title;
    this.description = post.description;
    this.type = post.type;
    this.details = post.details;
  }

}
