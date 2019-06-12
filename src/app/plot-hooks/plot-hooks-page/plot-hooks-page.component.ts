import { Component, OnInit } from '@angular/core';
import { PlotHookComponent } from '../plot-hook/plot-hook.component';
import { PlotHooksDataService } from '../plot-hooks-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-plot-hooks-page',
  templateUrl: './plot-hooks-page.component.html',
  styleUrls: ['./plot-hooks-page.component.scss']
})
export class PlotHooksPageComponent implements OnInit {

  posts$: Observable<any>;

  constructor(private plotHooksDataService: PlotHooksDataService) { }

  ngOnInit() {
    this.posts$ = this.plotHooksDataService.getJSONData().pipe(map(posts => posts.posts));
  }

}
