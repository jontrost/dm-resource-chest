import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { NpcsDataService } from "../npcs-data.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { MetaTagService } from 'src/app/services/meta-tag.service';

@Component({
	selector: "app-npc-page",
	templateUrl: "./npc-page.component.html",
	styleUrls: ["./npc-page.component.scss"],
	providers: [NpcsDataService]
})
export class NpcPageComponent implements OnInit {
	posts$: Observable<any>;
	filteredPosts$: Observable<any>;
	rawPosts$: Observable<any>;

	click: boolean;
	hideGroup1: boolean = true;
	hideGroup2: boolean = true;
	showMale: string = "male";
	showFemale: string = "female";
	showYoung: string = "young";
	showMiddleAged: string = "middle-aged";
	showOld: string = "old";

	@ViewChild("male", { static: false }) male: ElementRef<HTMLElement>;
	@ViewChild("female", { static: false }) female: ElementRef<HTMLElement>;
	@ViewChild("young", { static: false }) young: ElementRef<HTMLElement>;
	@ViewChild("middleAged", { static: false }) middleAged: ElementRef<HTMLElement>;
	@ViewChild("old", { static: false }) old: ElementRef<HTMLElement>;

	constructor(private npcsDataService: NpcsDataService, private metaTagService: MetaTagService) { }

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
						(post.sex == this.showMale || post.sex == this.showFemale) &&
						(post.age == this.showYoung || post.age == this.showMiddleAged || post.age == this.showOld)
				)
			)
		);
	}

	ngOnInit() {
		this.rawPosts$ = this.npcsDataService.getJSONData();
		this.posts$ = this.rawPosts$.pipe(map(posts => posts.posts));
		this.metaTagService.updateMetaTags("NPCs", "Homebrew NPCs for D&D 5E", "https://i.imgur.com/2ZMkzYm.jpg", "https://dmresourcechest.com/npcs");
	}

	toggleMale() {
		if (this.showMale == "male") {
			this.showMale = "";
		} else {
			this.showMale = "male";
		}
		this.updateFilters();
	}

	toggleFemale() {
		if (this.showFemale == "female") {
			this.showFemale = "";
		} else {
			this.showFemale = "female";
		}
		this.updateFilters();
	}

	toggleYoung() {
		if (this.showYoung == "young") {
			this.showYoung = "";
		} else {
			this.showYoung = "young";
		}
		this.updateFilters();
	}

	toggleMiddleAged() {
		if (this.showMiddleAged == "middle-aged") {
			this.showMiddleAged = "";
		} else {
			this.showMiddleAged = "middle-aged";
		}
		this.updateFilters();
	}

	toggleOld() {
		if (this.showOld == "old") {
			this.showOld = "";
		} else {
			this.showOld = "old";
		}
		this.updateFilters();
	}

	tabToggleMale() {
		this.male.nativeElement.click();
	}

	tabToggleFemale() {
		this.female.nativeElement.click();
	}

	tabToggleYoung() {
		this.young.nativeElement.click();
	}

	tabToggleMiddleAged() {
		this.middleAged.nativeElement.click();
	}

	tabToggleOld() {
		this.old.nativeElement.click();
	}
}
