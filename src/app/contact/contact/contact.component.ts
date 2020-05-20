import { Component } from "@angular/core";
import { ContactDataService } from "../contact-data.service";

@Component({
	selector: "app-contact",
	templateUrl: "./contact.component.html",
	styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
	constructor(private contactDataService: ContactDataService) { }

	serverResponse;
	captchaResolved: boolean = false;
	formSubmitted: boolean = false;

	formData = {
		name: "",
		email: "",
		message: ""
	};

	resolved() {
		this.captchaResolved = true;
	}

	async submitForm() {
		this.formSubmitted = true;
		try {
			this.serverResponse = await this.contactDataService.sendEmail(this.formData);
		} catch (error) {
			console.log('error', error);
			this.serverResponse = "Your message was unable to send, please try again later.";
		}
	}
}
