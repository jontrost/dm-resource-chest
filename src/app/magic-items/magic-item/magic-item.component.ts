import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { MagicItemsDataService } from "../magic-items-data.service";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { TextHighlightService } from "src/app/search/text-highlight.service";
import { MetaTagService } from 'src/app/services/meta-tag.service';

@Component({
	selector: "app-magic-item",
	templateUrl: "./magic-item.component.html",
	styleUrls: ["./magic-item.component.scss"]
})
export class MagicItemComponent implements OnInit {
	post$: Observable<any>;
	paramSub: Subscription;
	metaTitle: string;
	metaDescription: string;
	metaImageUrl: string;
	metaUrl: string;

	constructor(
		private route: ActivatedRoute,
		private service: MagicItemsDataService,
		private metaTagService: MetaTagService,
		public highlightService: TextHighlightService,
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
			this.metaTitle = post[0].title;
			this.metaDescription = post[0].description;
			this.metaImageUrl = post[0].shareImage;
			this.metaUrl = 'https://dmresourcechest.com/magic-items/' + this.route.snapshot.url.toString();
		});
		this.metaTagService.updateMetaTags(this.metaTitle, this.metaDescription, this.metaImageUrl, this.metaUrl);
		subscription.unsubscribe();
	}
}
