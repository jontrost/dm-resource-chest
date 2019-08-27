import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root'
})
export class MetaTagService {

	constructor(private meta: Meta, private titleService: Title) { }

	updateMetaTags(title: string, description: string, imageUrl: string, url: string) {
		this.meta.updateTag({ name: 'title', content: title });
		this.meta.updateTag({ property: 'og:title', content: title });
		this.meta.updateTag({ name: 'description', content: description });
		this.meta.updateTag({ property: 'og:description', content: description });
		this.meta.updateTag({ property: 'og:image', content: imageUrl });
		this.meta.updateTag({ property: 'og:url', content: url });
		this.titleService.setTitle(title);
	}
}
