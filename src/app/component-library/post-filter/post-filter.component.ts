import { Component, Input } from '@angular/core';

@Component({
  selector: 'cl-post-filter',
  templateUrl: './post-filter.component.html',
  styleUrls: ['./post-filter.component.scss']
})
export class PostFilterComponent {

  @Input() filterGroup1: string[];
  @Input() filterGroup2: string[];
  @Input() filter1: string;
  @Input() filter2: string;
  
}
