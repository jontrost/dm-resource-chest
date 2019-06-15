import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { PlotHooksRoutingModule } from './plot-hooks-routing.module';
import { PlotHooksPageComponent } from './plot-hooks-page/plot-hooks-page.component';
import { PlotHookComponent } from './plot-hook/plot-hook.component';

@NgModule({
  declarations: [PlotHooksPageComponent, PlotHookComponent],
  imports: [
    CommonModule,
    PlotHooksRoutingModule,
    ShareButtonsModule
  ]
})
export class PlotHooksModule { }
