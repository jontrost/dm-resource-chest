import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { NpcsRoutingModule } from './npcs-routing.module';
import { NpcPageComponent } from './npc-page/npc-page.component';
import { NpcComponent } from './npc/npc.component';
import { ComponentLibraryModule } from '../component-library/component-library.module';


@NgModule({
  declarations: [NpcPageComponent, NpcComponent],
  imports: [
    CommonModule,
    NpcsRoutingModule,
    ShareButtonsModule,
    ComponentLibraryModule
  ]
})
export class NpcsModule { }
