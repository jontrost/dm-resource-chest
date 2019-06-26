import { Component, OnInit } from "@angular/core";
import { ContactDataService } from "../contact-data.service";
//import * as nodemailer from "nodemailer";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
  constructor(private contactDataService: ContactDataService) {}
  formPayload = {
    email: "jontrost426@gmail.com",
    name: "name"
  };
  formSubmit() {
    this.contactDataService.sendEmail(this.formPayload);
  }
  //
  // ngOnInit(): void {
  //   console.log(nodemailer);
  // }
  // testAccount = this.nodemailer.createTestAccount();
  // // create reusable transporter object using the default SMTP transport
  // transporter = this.nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: this.testAccount.user, // generated ethereal user
  //     pass: this.testAccount.pass // generated ethereal password
  //   }
  // });
  // sendEmail() {
  //   this.transporter.sendMail({
  //     from: '"Fred Foo " <foo@example.com>', // sender address
  //     to: "bar@example.com, baz@example.com", // list of receivers
  //     subject: "Hello ✔", // Subject line
  //     text: "Hello world?", // plain text body
  //     html: "<b>Hello world?</b>" // html body
  //   });
  // }
}
