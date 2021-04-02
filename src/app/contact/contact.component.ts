import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  icons = [{
    i: "assets/icons/facebook.webp",
    header: "Facebook",
    ref: "https://www.facebook.com/itzik.savaia.14",
    contact: "https://www.facebook.com/itzik.savaia.14"
  },
  {
    i: "assets/icons/linkedin.png",
    header: "Linkedin",
    ref: "https://www.linkedin.com/in/itzik-saviya-764165185/",
    contact: "https://www.linkedin.com/in/itzik-saviya-764165185/"
  },
  {
    i: "assets/icons/github.webp",
    header: "Github",
    ref: "https://github.com/itzikking",
    contact: "https://github.com/itzikking"
  },
  {
    i: "assets/icons/gmail.png",
    header: "Gmail",
    ref: "mailto:itziksavaia@gmail.com",
    contact: "itziksavaia@gmail.com"
  },
  {
    i: "assets/icons/phone.webp",
    header: "Phone",
    ref: "tel:0503936369",
    contact: "050-3936369"
  },]
  constructor() { }

  ngOnInit(): void {
  }

}
