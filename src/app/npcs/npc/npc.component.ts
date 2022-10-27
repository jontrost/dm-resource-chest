import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { NpcsDataService } from "../npcs-data.service";
import { map } from "rxjs/operators";
import { TextHighlightService } from "src/app/search/text-highlight.service";
import { MetaTagService } from 'src/app/services/meta-tag.service';

@Component({
	selector: "app-npc",
	templateUrl: "./npc.component.html",
	styleUrls: ["./npc.component.scss"]
})
export class NpcComponent implements OnInit, OnDestroy {
	post$: Observable<any>;
	paramSub: Subscription;
	metaTitle: string;
	metaDescription: string;
	metaImageUrl: string;
	metaUrl: string;

	constructor(
		private route: ActivatedRoute,
		private service: NpcsDataService,
		private highlightService: TextHighlightService,
		private metaTagService: MetaTagService
	) { }

	ngOnInit() {
		this.paramSub = this.route.params.subscribe(param => this.updateRoute(param["url"]));
		this.post$ = this.service
			.getJSONData()
			.pipe(map(value => value.posts.filter(value => value.url == this.route.snapshot.paramMap.get("url"))));
		this.generateMetaTags();
	}

	ngOnDestroy(): void {
		this.paramSub.unsubscribe();
	}

	updateRoute(url: string) {
		this.post$ = this.service.getJSONData().pipe(map(value => value.posts.filter(value => value.url == url)));
	}

	generateMetaTags() {
		let subscription = this.post$.subscribe(post => {
			this.metaTitle = post[0].name;
			this.metaDescription = post[0].quote;
			this.metaImageUrl = post[0].shareImage;
			this.metaUrl = 'https://dmresourcechest.com/npcs/' + this.route.snapshot.url.toString();
		});
		this.metaTagService.updateMetaTags(this.metaTitle, this.metaDescription, this.metaImageUrl, this.metaUrl);
		subscription.unsubscribe();
	}
}
