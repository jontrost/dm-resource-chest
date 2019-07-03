import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFilterComponent } from './post-filter/post-filter.component';

@NgModule({
  declarations: [PostFilterComponent],
  imports: [
    CommonModule
  ],
  exports: [PostFilterComponent]
})
export class ComponentLibraryModule { }
