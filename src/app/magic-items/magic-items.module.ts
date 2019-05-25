import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MagicItemComponent } from './magic-item/magic-item.component';
import { MagicItemsPageComponent } from './magic-items-page/magic-items-page.component';
import { MagicItemsRoutingModule } from './magic-items-routing.module'


@NgModule({
  declarations: [MagicItemComponent, MagicItemsPageComponent],
  imports: [
    CommonModule,
    MagicItemsRoutingModule
  ]
})
export class MagicItemsModule { }
