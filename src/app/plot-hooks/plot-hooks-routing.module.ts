import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlotHooksPageComponent } from "./plot-hooks-page/plot-hooks-page.component";
import { PlotHookComponent } from "./plot-hook/plot-hook.component";

const routes: Routes = [
	{
		path: "",
		component: PlotHooksPageComponent,
		data: {
			shouldReuseRoute: true,
			key: 'plot-hooks'
		}
	},
	{
		path: ":url",
		component: PlotHookComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PlotHooksRoutingModule { }
