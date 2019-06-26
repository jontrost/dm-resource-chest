import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: "root"
})
export class ContactDataService {
  constructor(private httpClient: HttpClient) {}

  sendEmail(formPayload) {
    console.log(httpOptions.headers);
        return this.httpClient.post("http://localhost:3000/contact-submit", formPayload, httpOptions);
  }
}
