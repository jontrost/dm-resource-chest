import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { PlotHooksDataService } from "../plot-hooks-data.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MetaTagService } from 'src/app/services/meta-tag.service';

@Component({
	selector: "app-plot-hooks-page",
	templateUrl: "./plot-hooks-page.component.html",
	styleUrls: ["./plot-hooks-page.component.scss"]
})
export class PlotHooksPageComponent implements OnInit {
	posts$: Observable<any>;
	filteredPosts$: Observable<any>;
	rawPosts$: Observable<any>;

	click: boolean;
	hideGroup1: boolean = true;
	showHorror: string = "horror";
	showHumor: string = "humor";
	showMystery: string = "mystery";
	showSocial: string = "social";
	showCombat: string = "combat";
	showExploration: string = "exploration";

	@ViewChild("combat", { static: false }) combat: ElementRef<HTMLElement>;
	@ViewChild("exploration", { static: false }) exploration: ElementRef<HTMLElement>;
	@ViewChild("horror", { static: false }) horror: ElementRef<HTMLElement>;
	@ViewChild("humor", { static: false }) humor: ElementRef<HTMLElement>;
	@ViewChild("mystery", { static: false }) mystery: ElementRef<HTMLElement>;
	@ViewChild("social", { static: false }) social: ElementRef<HTMLElement>;

	constructor(private plotHooksDataService: PlotHooksDataService, private metaTagService: MetaTagService) { }

	removeFocus() {
		this.click = true;
	}

	toggleGroup1() {
		this.hideGroup1 = !this.hideGroup1;
	}

	updateFilters() {
		this.posts$ = this.rawPosts$.pipe(
			map(posts =>
				posts.posts.filter(
					post =>
						post.tags.includes(this.showHorror) ||
						post.tags.includes(this.showHumor) ||
						post.tags.includes(this.showMystery) ||
						post.tags.includes(this.showSocial) ||
						post.tags.includes(this.showCombat) ||
						post.tags.includes(this.showExploration)
				)
			)
		);
	}

	ngOnInit() {
		this.rawPosts$ = this.plotHooksDataService.getJSONData();
		this.posts$ = this.rawPosts$.pipe(map(posts => posts.posts));
		this.metaTagService.updateMetaTags("Plot Hooks", "Homebrew Plot Hooks for D&D 5E", "https://i.imgur.com/2ZMkzYm.jpg", "https://dmresourcechest.com/plot-hooks");
	}

	toggleHorror() {
		if (this.showHorror == "horror") {
			this.showHorror = "";
		} else {
			this.showHorror = "horror";
		}
		this.updateFilters();
	}

	toggleHumor() {
		if (this.showHumor == "humor") {
			this.showHumor = "";
		} else {
			this.showHumor = "humor";
		}
		this.updateFilters();
	}

	toggleCombat() {
		if (this.showCombat == "combat") {
			this.showCombat = "";
		} else {
			this.showCombat = "combat";
		}
		this.updateFilters();
	}

	toggleExploration() {
		if (this.showExploration == "exploration") {
			this.showExploration = "";
		} else {
			this.showExploration = "exploration";
		}
		this.updateFilters();
	}

	toggleSocial() {
		if (this.showSocial == "social") {
			this.showSocial = "";
		} else {
			this.showSocial = "social";
		}
		this.updateFilters();
	}

	toggleMystery() {
		if (this.showMystery == "mystery") {
			this.showMystery = "";
		} else {
			this.showMystery = "mystery";
		}
		this.updateFilters();
	}

	tabToggleCombat() {
		this.combat.nativeElement.click();
	}

	tabToggleHorror() {
		this.horror.nativeElement.click();
	}

	tabToggleHumor() {
		this.humor.nativeElement.click();
	}

	tabToggleMystery() {
		this.mystery.nativeElement.click();
	}

	tabToggleExploration() {
		this.exploration.nativeElement.click();
	}

	tabToggleSocial() {
		this.social.nativeElement.click();
	}
}
