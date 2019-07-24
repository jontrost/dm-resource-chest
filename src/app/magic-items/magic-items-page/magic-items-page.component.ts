import { Component, OnInit } from '@angular/core';
import { MagicItemsDataService} from '../magic-items-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-magic-items-page',
  templateUrl: './magic-items-page.component.html',
  styleUrls: ['./magic-items-page.component.scss'],
  providers: [MagicItemsDataService]
})

export class MagicItemsPageComponent implements OnInit {

  posts$: Observable<any>;
  filteredPosts$: Observable<any>;
  rawPosts$: Observable<any>;

  hideGroup1: boolean = true
  hideGroup2: boolean = true;
  showCommon: string = 'common';
  showUncommon: string = 'uncommon';
  showRare: string = 'rare';
  showVeryRare: string = 'very rare';
  showLegendary: string = 'legendary';
  showArmor: string = 'armor';
  showPotion: string = 'potion';
  showJewelry: string = 'jewelry';
  showScroll: string = 'scroll';
  showStaff: string = 'staff';
  showWand: string = 'wand';
  showWeapon: string = 'weapon';
  showWondrousItem: string = 'wondrous item';

  constructor(private magicItemsDataService: MagicItemsDataService) {

  }

  toggleGroup1() {
    this.hideGroup1 = !this.hideGroup1;
  }

  toggleGroup2() {
    this.hideGroup2 = !this.hideGroup2;
  }

  updateFilters() {
    if (this.showArmor == '' && this.showJewelry == '' && this.showPotion == '' && this.showScroll == '' && this.showStaff == '' && this.showWand == '' && this.showWeapon == '' && this.showWondrousItem == '') {
      this.posts$ = this.rawPosts$.pipe(
        map(posts => posts.posts.filter(
          post =>
            post.rarity == this.showCommon
            || post.rarity == this.showUncommon
            || post.rarity == this.showRare
            || post.rarity == this.showVeryRare
            || post.rarity == this.showLegendary
          )
        )
      );
    }
    else if (this.showCommon  == '' && this.showUncommon == '' && this.showRare == '' && this.showVeryRare == '' && this.showLegendary == '') {
      this.posts$ = this.rawPosts$.pipe(
        map(posts => posts.posts.filter(
          post =>
            post.type == this.showArmor
            || post.type == this.showPotion
            || post.type == this.showJewelry
            || post.type == this.showScroll
            || post.type == this.showStaff
            || post.type == this.showWand
            || post.type == this.showWeapon
            || post.type == this.showWondrousItem
          )
        )
      );
    }
    else {
      this.posts$ = this.rawPosts$.pipe(
        map(posts => posts.posts.filter(
          post =>
            (
            post.rarity == this.showCommon
            || post.rarity == this.showUncommon
            || post.rarity == this.showRare
            || post.rarity == this.showVeryRare
            || post.rarity == this.showLegendary
            )
            &&
            (
            post.type == this.showArmor
            || post.type == this.showPotion
            || post.type == this.showJewelry
            || post.type == this.showScroll
            || post.type == this.showStaff
            || post.type == this.showWand
            || post.type == this.showWeapon
            || post.type == this.showWondrousItem
            )
          )
        )
      );
    }
  }

  ngOnInit() {
    this.rawPosts$ = this.magicItemsDataService.getJSONData();
    this.posts$ = this.rawPosts$.pipe(
      map(posts => posts.posts)
    );
  }

  toggleCommon() {
    if (this.showCommon == 'common') {
      this.showCommon = '';
    }
    else {
      this.showCommon = 'common';
    }
    this.updateFilters();
  }

  toggleUncommon() {
    if (this.showUncommon == 'uncommon') {
      this.showUncommon = '';
    }
    else {
      this.showUncommon = 'uncommon';
    }
    this.updateFilters();
  }

  toggleRare() {
    if (this.showRare == 'rare') {
      this.showRare = '';
    }
    else {
      this.showRare = 'rare';
    }
    this.updateFilters();
  }

  toggleVeryRare() {
    if (this.showVeryRare == 'very rare') {
      this.showVeryRare = '';
    }
    else {
      this.showVeryRare = 'very rare';
    }
    this.updateFilters();
  }

  toggleLegendary() {
    if (this.showLegendary == 'legendary') {
      this.showLegendary = '';
    }
    else {
      this.showLegendary = 'legendary';
    }
    this.updateFilters();
  }

  toggleArmor() {
    if (this.showArmor == 'armor') {
      this.showArmor = '';
    }
    else {
      this.showArmor = 'armor';
    }
    this.updateFilters();
  }

  togglePotion() {
    if (this.showPotion == 'potion') {
      this.showPotion = '';
    }
    else {
      this.showPotion = 'potion';
    }
    this.updateFilters();
  }

  toggleJewelry() {
    if (this.showJewelry == 'jewelry') {
      this.showJewelry = '';
    }
    else {
      this.showJewelry = 'jewelry';
    }
    this.updateFilters();
  }

  toggleScroll() {
    if (this.showScroll == 'scroll') {
      this.showScroll = '';
    }
    else {
      this.showScroll = 'scroll';
    }
    this.updateFilters();
  }

  toggleStaff() {
    if (this.showStaff == 'staff') {
      this.showStaff = '';
    }
    else {
      this.showStaff = 'staff';
    }
    this.updateFilters();
  }

  toggleWand() {
    if (this.showWand == 'wand') {
      this.showWand = '';
    }
    else {
      this.showWand = 'wand';
    }
    this.updateFilters();
  }

  toggleWeapon() {
    if (this.showWeapon == 'weapon') {
      this.showWeapon = '';
    }
    else {
      this.showWeapon = 'weapon';
    }
    this.updateFilters();
  }

  toggleWondrousItem() {
    if (this.showWondrousItem == 'wondrous item') {
      this.showWondrousItem = '';
    }
    else {
      this.showWondrousItem = 'wondrous item';
    }
    this.updateFilters();
  }
}
