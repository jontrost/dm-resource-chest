import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { Cacheable } from "ngx-cacheable";

@Injectable({
	providedIn: "root"
})
export class SearchDataService {
	constructor(private httpClient: HttpClient) { }

	@Cacheable()
	getSearchResults(searchTerm: string): Observable<any> {
		const route = "https://trosthost.mynetgear.com:443/api/search/" + searchTerm;
		return this.httpClient.get(route);
	}
}
