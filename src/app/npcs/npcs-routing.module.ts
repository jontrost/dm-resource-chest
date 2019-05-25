import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpcPageComponent } from './npc-page/npc-page.component';

const routes: Routes = [
  {path: '', component: NpcPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpcsRoutingModule { }
