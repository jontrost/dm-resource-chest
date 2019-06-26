import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ContactDataService {
  constructor(private httpClient: HttpClient) {}

  sendEmail(formPayload) {
    this.httpClient.post("http://localhost:3000/contact-submit", formPayload);
  }
}
