import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UpdateDataService {
  constructor(private httpClient: HttpClient) {}

  getJSONData(): Observable<any> {
    return this.httpClient.get(
      "https://dm-resource-chest-server.herokuapp.com/updates"
    );
  }
}
