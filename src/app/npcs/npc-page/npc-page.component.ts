import { Component, OnInit } from '@angular/core';
import { NpcsDataService } from '../npcs-data.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-npc-page',
  templateUrl: './npc-page.component.html',
  styleUrls: ['./npc-page.component.scss'],
  providers: [NpcsDataService]
})
export class NpcPageComponent implements OnInit {

  posts$: Observable<any>;
  filteredPosts$: Observable<any>;
  rawPosts$: Observable<any>;

  showMale: string = 'male';
  showFemale: string = 'female';
  showYoung: string = 'young';
  showMiddleAged: string = 'middle-aged';
  showOld: string = 'old';

  constructor(private npcsDataService: NpcsDataService) {

  }

  updateFilters() {
    if (this.showYoung == '' && this.showMiddleAged == '' && this.showOld == '') {
      this.posts$ = this.rawPosts$.pipe(
        map(posts => posts.posts.filter(
          post =>
            post.sex == this.showMale || post.sex == this.showFemale
          )
        )
      );
    }
    else if (this.showMale  == '' && this.showFemale == '') {
      this.posts$ = this.rawPosts$.pipe(
        map(posts => posts.posts.filter(
          post =>
            post.age == this.showYoung
            || post.age == this.showMiddleAged
            || post.age == this.showOld
          )
        )
      );
    }
    else {
      this.posts$ = this.rawPosts$.pipe(
        map(posts => posts.posts.filter(
          post =>
            (
            post.sex == this.showMale
            || post.sex == this.showFemale
            )
            &&
            (
            post.age == this.showYoung
            || post.age == this.showMiddleAged
            || post.age == this.showOld
            )
          )
        )
      );
    }
  }

  ngOnInit() {
    this.rawPosts$ = this.npcsDataService.getJSONData();
    this.posts$ = this.rawPosts$.pipe(
      map(posts => posts.posts)
    );
  }

  toggleMale() {
    if (this.showMale == 'male') {
      this.showMale = '';
    }
    else {
      this.showMale = 'male';
    }
    this.updateFilters();
  }

  toggleFemale() {
    if (this.showFemale == 'female') {
      this.showFemale = '';
    }
    else {
      this.showFemale = 'female';
    }
    this.updateFilters();
  }

  toggleYoung() {
    if (this.showYoung == 'young') {
      this.showYoung = '';
    }
    else {
      this.showYoung = 'young';
    }
    this.updateFilters();
  }

  toggleMiddleAged() {
    if (this.showMiddleAged == 'middle-aged') {
      this.showMiddleAged = '';
    }
    else {
      this.showMiddleAged = 'middle-aged';
    }
    this.updateFilters();
  }

  toggleOld() {
    if (this.showOld == 'old') {
      this.showOld = '';
    }
    else {
      this.showOld = 'old';
    }
    this.updateFilters();
  }
}
