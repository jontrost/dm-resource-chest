import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShareButtonsModule } from "@ngx-share/buttons";
import { MagicItemComponent } from "./magic-item/magic-item.component";
import { MagicItemsPageComponent } from "./magic-items-page/magic-items-page.component";
import { MagicItemsRoutingModule } from "./magic-items-routing.module";
import { HighlightPipe } from "./highlight.pipe";

@NgModule({
	declarations: [MagicItemComponent, MagicItemsPageComponent, HighlightPipe],
	imports: [CommonModule, MagicItemsRoutingModule, ShareButtonsModule]
})
export class MagicItemsModule { }
