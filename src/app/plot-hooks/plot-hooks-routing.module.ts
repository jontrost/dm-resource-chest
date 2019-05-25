import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlotHooksPageComponent } from './plot-hooks-page/plot-hooks-page.component';

const routes: Routes = [
  {path: '', component: PlotHooksPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlotHooksRoutingModule { }
