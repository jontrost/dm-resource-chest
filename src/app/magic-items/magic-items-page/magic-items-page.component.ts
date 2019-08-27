import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MagicItemsDataService } from "../magic-items-data.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MetaTagService } from 'src/app/services/meta-tag.service';

@Component({
	selector: "app-magic-items-page",
	templateUrl: "./magic-items-page.component.html",
	styleUrls: ["./magic-items-page.component.scss"],
	providers: [MagicItemsDataService]
})
export class MagicItemsPageComponent implements OnInit {
	posts$: Observable<any>;
	filteredPosts$: Observable<any>;
	rawPosts$: Observable<any>;

	click: boolean;
	hideGroup1: boolean = true;
	hideGroup2: boolean = true;
	showCommon: string = "common";
	showUncommon: string = "uncommon";
	showRare: string = "rare";
	showVeryRare: string = "very rare";
	showLegendary: string = "legendary";
	showArmor: string = "armor";
	showPotion: string = "potion";
	showJewelry: string = "jewelry";
	showScroll: string = "scroll";
	showStaff: string = "staff";
	showWand: string = "wand";
	showWeapon: string = "weapon";
	showWondrousItem: string = "wondrous item";

	@ViewChild("common", { static: false }) common: ElementRef<HTMLElement>;
	@ViewChild("uncommon", { static: false }) uncommon: ElementRef<HTMLElement>;
	@ViewChild("rare", { static: false }) rare: ElementRef<HTMLElement>;
	@ViewChild("veryRare", { static: false }) veryRare: ElementRef<HTMLElement>;
	@ViewChild("legendary", { static: false }) legendary: ElementRef<HTMLElement>;
	@ViewChild("armor", { static: false }) armor: ElementRef<HTMLElement>;
	@ViewChild("potion", { static: false }) potion: ElementRef<HTMLElement>;
	@ViewChild("jewelry", { static: false }) jewelry: ElementRef<HTMLElement>;
	@ViewChild("scroll", { static: false }) scroll: ElementRef<HTMLElement>;
	@ViewChild("staff", { static: false }) staff: ElementRef<HTMLElement>;
	@ViewChild("wand", { static: false }) wand: ElementRef<HTMLElement>;
	@ViewChild("weapon", { static: false }) weapon: ElementRef<HTMLElement>;
	@ViewChild("wondrousItem", { static: false }) wondrousItem: ElementRef<HTMLElement>;

	constructor(private magicItemsDataService: MagicItemsDataService, private metaTagService: MetaTagService) { }

	removeFocus() {
		this.click = true;
	}

	toggleGroup1() {
		this.hideGroup1 = !this.hideGroup1;
	}

	toggleGroup2() {
		this.hideGroup2 = !this.hideGroup2;
	}

	updateFilters() {
		this.posts$ = this.rawPosts$.pipe(
			map(posts =>
				posts.posts.filter(
					post =>
						(post.rarity == this.showCommon ||
							post.rarity == this.showUncommon ||
							post.rarity == this.showRare ||
							post.rarity == this.showVeryRare ||
							post.rarity == this.showLegendary) &&
						(post.type == this.showArmor ||
							post.type == this.showPotion ||
							post.type == this.showJewelry ||
							post.type == this.showScroll ||
							post.type == this.showStaff ||
							post.type == this.showWand ||
							post.type == this.showWeapon ||
							post.type == this.showWondrousItem)
				)
			)
		);
	}

	ngOnInit() {
		this.rawPosts$ = this.magicItemsDataService.getJSONData();
		this.posts$ = this.rawPosts$.pipe(map(posts => posts.posts));
		this.metaTagService.updateMetaTags("Magic Items", "Homebrew Magic Items for D&D 5E", "https://i.imgur.com/2ZMkzYm.jpg", "https://dmresourcechest.com/magic-items");
	}

	toggleCommon() {
		if (this.showCommon == "common") {
			this.showCommon = "";
		} else {
			this.showCommon = "common";
		}
		this.updateFilters();
	}

	toggleUncommon() {
		if (this.showUncommon == "uncommon") {
			this.showUncommon = "";
		} else {
			this.showUncommon = "uncommon";
		}
		this.updateFilters();
	}

	toggleRare() {
		if (this.showRare == "rare") {
			this.showRare = "";
		} else {
			this.showRare = "rare";
		}
		this.updateFilters();
	}

	toggleVeryRare() {
		if (this.showVeryRare == "very rare") {
			this.showVeryRare = "";
		} else {
			this.showVeryRare = "very rare";
		}
		this.updateFilters();
	}

	toggleLegendary() {
		if (this.showLegendary == "legendary") {
			this.showLegendary = "";
		} else {
			this.showLegendary = "legendary";
		}
		this.updateFilters();
	}

	toggleArmor() {
		if (this.showArmor == "armor") {
			this.showArmor = "";
		} else {
			this.showArmor = "armor";
		}
		this.updateFilters();
	}

	togglePotion() {
		if (this.showPotion == "potion") {
			this.showPotion = "";
		} else {
			this.showPotion = "potion";
		}
		this.updateFilters();
	}

	toggleJewelry() {
		if (this.showJewelry == "jewelry") {
			this.showJewelry = "";
		} else {
			this.showJewelry = "jewelry";
		}
		this.updateFilters();
	}

	toggleScroll() {
		if (this.showScroll == "scroll") {
			this.showScroll = "";
		} else {
			this.showScroll = "scroll";
		}
		this.updateFilters();
	}

	toggleStaff() {
		if (this.showStaff == "staff") {
			this.showStaff = "";
		} else {
			this.showStaff = "staff";
		}
		this.updateFilters();
	}

	toggleWand() {
		if (this.showWand == "wand") {
			this.showWand = "";
		} else {
			this.showWand = "wand";
		}
		this.updateFilters();
	}

	toggleWeapon() {
		if (this.showWeapon == "weapon") {
			this.showWeapon = "";
		} else {
			this.showWeapon = "weapon";
		}
		this.updateFilters();
	}

	toggleWondrousItem() {
		if (this.showWondrousItem == "wondrous item") {
			this.showWondrousItem = "";
		} else {
			this.showWondrousItem = "wondrous item";
		}
		this.updateFilters();
	}

	tabToggleCommon() {
		this.common.nativeElement.click();
	}

	tabToggleUncommon() {
		this.uncommon.nativeElement.click();
	}

	tabToggleRare() {
		this.rare.nativeElement.click();
	}

	tabToggleVeryRare() {
		this.veryRare.nativeElement.click();
	}

	tabToggleLegendary() {
		this.legendary.nativeElement.click();
	}

	tabToggleArmor() {
		this.armor.nativeElement.click();
	}

	tabTogglePotion() {
		this.potion.nativeElement.click();
	}

	tabToggleJewelry() {
		this.jewelry.nativeElement.click();
	}

	tabToggleScroll() {
		this.scroll.nativeElement.click();
	}

	tabToggleStaff() {
		this.staff.nativeElement.click();
	}

	tabToggleWand() {
		this.wand.nativeElement.click();
	}

	tabToggleWeapon() {
		this.weapon.nativeElement.click();
	}

	tabToggleWondrousItem() {
		this.wondrousItem.nativeElement.click();
	}
}
