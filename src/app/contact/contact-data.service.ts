import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class ContactDataService {
	constructor(private httpClient: HttpClient) { }

	async sendEmail(formData) {
		return this.httpClient
			.post("https://trosthost.mynetgear.com:3000/api/contact-submit", formData)
			.toPromise();
	}
}
