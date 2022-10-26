import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { Cacheable } from "ngx-cacheable";

@Injectable({
	providedIn: "root"
})
export class PlotHooksDataService {
	constructor(private httpClient: HttpClient) { }

	@Cacheable()
	getJSONData(): Observable<any> {
		return this.httpClient.get("https://trosthost.mynetgear.com:443/api/plot-hooks");
	}
}
