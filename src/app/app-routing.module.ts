import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MagicItemsPageComponent } from './magic-items/magic-items-page/magic-items-page.component';

const routes: Routes = [
  {path: 'magic-items', loadChildren: './magic-items/magic-items.module#MagicItemsModule'},
  {path: 'npcs', loadChildren: './npcs/npcs.module#NpcsModule'},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
