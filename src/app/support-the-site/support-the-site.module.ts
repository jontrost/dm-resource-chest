import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportTheSitePageComponent } from './support-the-site-page/support-the-site-page.component';
import { SupportTheSiteRoutingModule } from './support-the-site-routing.module';

@NgModule({
  declarations: [SupportTheSitePageComponent],
  imports: [
    CommonModule,
    SupportTheSiteRoutingModule
  ]
})
export class SupportTheSiteModule { }
