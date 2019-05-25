import { Component, OnInit } from '@angular/core';
import { PlotHookComponent } from '../plot-hook/plot-hook.component';
import { PlotHooksDataService } from '../plot-hooks-data.service';

@Component({
  selector: 'app-plot-hooks-page',
  templateUrl: './plot-hooks-page.component.html',
  styleUrls: ['./plot-hooks-page.component.scss']
})
export class PlotHooksPageComponent implements OnInit {

  posts: PlotHookComponent[];

  constructor(private plotHooksDataService: PlotHooksDataService) { }

  ngOnInit() {
    this.posts = this.plotHooksDataService.getPosts();
  }

}
