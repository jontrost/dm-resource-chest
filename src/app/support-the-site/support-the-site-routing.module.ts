import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportTheSitePageComponent } from './support-the-site-page/support-the-site-page.component';

const routes: Routes = [
  {
    path: '',
    component: SupportTheSitePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportTheSiteRoutingModule { }
