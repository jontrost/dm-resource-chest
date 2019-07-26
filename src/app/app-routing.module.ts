import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
	{
		path: "magic-items",
		loadChildren: "./magic-items/magic-items.module#MagicItemsModule"
	},
	{ path: "npcs", loadChildren: "./npcs/npcs.module#NpcsModule" },
	{
		path: "plot-hooks",
		loadChildren: "./plot-hooks/plot-hooks.module#PlotHooksModule"
	},
	{ path: "contact", loadChildren: "./contact/contact.module#ContactModule" },
	{ path: "home", component: HomeComponent },
	{ path: "", component: HomeComponent },
	{ path: "**", redirectTo: "" }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
