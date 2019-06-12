import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PlotHooksDataService } from '../plot-hooks-data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-plot-hook',
  templateUrl: './plot-hook.component.html',
  styleUrls: ['./plot-hook.component.scss']
})
export class PlotHookComponent implements OnInit {

  post$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private service: PlotHooksDataService
  ) {
  }

  ngOnInit() {
    this.post$ = this.service.getJSONData().pipe(map(value => value.posts.filter(value => value.url == this.route.snapshot.paramMap.get('url'))));
  }

}
