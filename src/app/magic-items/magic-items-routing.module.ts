import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagicItemsPageComponent } from './magic-items-page/magic-items-page.component'

const routes: Routes = [
    {
      path: '',
      component: MagicItemsPageComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MagicItemsRoutingModule { }