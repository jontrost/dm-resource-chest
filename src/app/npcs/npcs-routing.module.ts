import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NpcPageComponent } from "./npc-page/npc-page.component";
import { NpcComponent } from "./npc/npc.component";

const routes: Routes = [
	{
		path: "",
		component: NpcPageComponent
	},
	{
		path: ":url",
		component: NpcComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class NpcsRoutingModule { }
