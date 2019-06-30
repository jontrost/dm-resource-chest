import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UpdateDataService } from "./update-data.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  updates$: Observable<any>;

  constructor(private updateDataService: UpdateDataService) {}

  ngOnInit() {
    this.updates$ = this.updateDataService
      .getJSONData()
      .pipe(map(updates => updates.updates));
  }
}
