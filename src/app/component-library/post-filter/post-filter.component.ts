import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cl-post-filter',
  templateUrl: './post-filter.component.html',
  styleUrls: ['./post-filter.component.scss']
})
export class PostFilterComponent implements OnInit {

  @Input() filterGroup1: string[];
  @Input() filterGroup2: string[];

  constructor() { }

  ngOnInit() {
  }

}
