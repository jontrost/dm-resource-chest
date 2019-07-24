import { Component, OnInit } from '@angular/core';
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
  filteredPosts$: Observable<any>;
  rawPosts$: Observable<any>;

  hideGroup1: boolean = true;
  showHorror: string = 'horror';
  showHumor: string = 'humor';
  showMystery: string = 'mystery';
  showSocial: string = 'social';
  showCombat: string = 'combat';
  showExploration: string = 'exploration';

  constructor(private plotHooksDataService: PlotHooksDataService) {

  }

  toggleGroup1() {
    this.hideGroup1 = !this.hideGroup1;
  }

  updateFilters() {
      this.posts$ = this.rawPosts$.pipe(
        map(posts => posts.posts.filter(
          post =>
            (
            post.tags.includes(this.showHorror)
            || post.tags.includes(this.showHumor)
            || post.tags.includes(this.showMystery)
            || post.tags.includes(this.showSocial)
            || post.tags.includes(this.showCombat)
            || post.tags.includes(this.showExploration)
            )
          )
        )
      );
  }

  ngOnInit() {
    this.rawPosts$ = this.plotHooksDataService.getJSONData();
    this.posts$ = this.rawPosts$.pipe(
      map(posts => posts.posts)
    );
  }

  toggleHorror() {
    if (this.showHorror == 'horror') {
      this.showHorror = '';
    }
    else {
      this.showHorror = 'horror';
    }
    this.updateFilters();
  }

  toggleHumor() {
    if (this.showHumor == 'humor') {
      this.showHumor = '';
    }
    else {
      this.showHumor = 'humor';
    }
    this.updateFilters();
  }

  toggleCombat() {
    if (this.showCombat == 'combat') {
      this.showCombat = '';
    }
    else {
      this.showCombat = 'combat';
    }
    this.updateFilters();
  }

  toggleExploration() {
    if (this.showExploration == 'exploration') {
      this.showExploration = '';
    }
    else {
      this.showExploration = 'exploration';
    }
    this.updateFilters();
  }

  toggleSocial() {
    if (this.showSocial == 'social') {
      this.showSocial = '';
    }
    else {
      this.showSocial = 'social';
    }
    this.updateFilters();
  }

  toggleMystery() {
    if (this.showMystery == 'mystery') {
      this.showMystery = '';
    }
    else {
      this.showMystery = 'mystery';
    }
    this.updateFilters();
  }
}
