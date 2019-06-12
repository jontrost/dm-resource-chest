import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MagicItemsDataService } from '../magic-items-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-magic-item',
  templateUrl: './magic-item.component.html',
  styleUrls: ['./magic-item.component.scss']
})
export class MagicItemComponent implements OnInit {

  post$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private service: MagicItemsDataService
  ) {
  }

  ngOnInit() {
    this.post$ = this.service.getJSONData().pipe(map(value => value.posts.filter(value => value.url == this.route.snapshot.paramMap.get('url'))));
  }

}
