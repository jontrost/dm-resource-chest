import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactComponent } from "./contact/contact.component";
import { ContactRoutingModule } from "./contact-routing.module";
import { FormsModule } from "@angular/forms";
import { RecaptchaModule } from "ng-recaptcha";

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, FormsModule, RecaptchaModule]
})
export class ContactModule {}
