import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plot-hook',
  templateUrl: './plot-hook.component.html',
  styleUrls: ['./plot-hook.component.scss']
})
export class PlotHookComponent implements OnInit {

  title: string;
  content: string;

  constructor(title: string, content: string) { 
    this.title = title;
    this.content = content;
  }

  ngOnInit() {
  }

}
