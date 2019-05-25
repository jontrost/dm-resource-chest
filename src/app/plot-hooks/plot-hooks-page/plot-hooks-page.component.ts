import { Component, OnInit } from '@angular/core';
import { PlotHookComponent } from '../plot-hook/plot-hook.component';

@Component({
  selector: 'app-plot-hooks-page',
  templateUrl: './plot-hooks-page.component.html',
  styleUrls: ['./plot-hooks-page.component.scss']
})
export class PlotHooksPageComponent implements OnInit {

  posts: PlotHookComponent[];

  constructor() { }

  ngOnInit() {
  }

}
