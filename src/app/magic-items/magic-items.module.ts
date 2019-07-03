import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { MagicItemComponent } from './magic-item/magic-item.component';
import { MagicItemsPageComponent } from './magic-items-page/magic-items-page.component';
import { MagicItemsRoutingModule } from './magic-items-routing.module';
import { ComponentLibraryModule } from '../component-library/component-library.module';


@NgModule({
  declarations: [MagicItemComponent, MagicItemsPageComponent],
  imports: [
    CommonModule,
    MagicItemsRoutingModule,
    ShareButtonsModule,
    ComponentLibraryModule
  ]
})
export class MagicItemsModule { }
