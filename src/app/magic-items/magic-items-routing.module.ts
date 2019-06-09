import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagicItemsPageComponent } from './magic-items-page/magic-items-page.component'
import { MagicItemComponent } from './magic-item/magic-item.component';

const routes: Routes = [
    {
      path: '',
      component: MagicItemsPageComponent,
    },
    {
      path: ':url',
      component: MagicItemComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MagicItemsRoutingModule { }