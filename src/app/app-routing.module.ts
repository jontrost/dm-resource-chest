import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
	{
		path: "magic-items",
		loadChildren: () => import('./magic-items/magic-items.module').then(m => m.MagicItemsModule)
	},
	{ path: "npcs", loadChildren: () => import('./npcs/npcs.module').then(m => m.NpcsModule) },
	{
		path: "plot-hooks",
		loadChildren: () => import('./plot-hooks/plot-hooks.module').then(m => m.PlotHooksModule)
	},
	{ path: "contact", loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
	{ path: "home", component: HomeComponent },
	{ path: "", component: HomeComponent },
	{ path: "**", redirectTo: "" }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
