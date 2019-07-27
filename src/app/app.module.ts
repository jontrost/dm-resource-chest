import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { SearchComponent } from "./search/search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextHighlightService } from "./search/text-highlight.service";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [AppComponent, NavigationComponent, HomeComponent, SearchComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
	providers: [TextHighlightService],
	bootstrap: [AppComponent]
})
export class AppModule { }
