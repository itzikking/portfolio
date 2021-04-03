import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {
  ProgramingLanguages = [
    "assets/ProgramingLanguages/javascript-original.svg",
    "assets/ProgramingLanguages/typescript-original.svg",
    "assets/ProgramingLanguages/css3-original.svg",
    "assets/ProgramingLanguages/html5-original.svg",
    "assets/ProgramingLanguages/nodejs-original.svg",
    "assets/ProgramingLanguages/csharp-original.svg",
    "assets/ProgramingLanguages/sql.png",
    "assets/ProgramingLanguages/nosql.png",
    "assets/ProgramingLanguages/java.png",
    "assets/ProgramingLanguages/xml.png",
  ]
  Systems = [
    "assets/Systems/android.png",
    "assets/Systems/ios.png",
    "assets/Systems/linux.png",
    "assets/Systems/windows.png",
  ]
  Angular9 = [
    "rxjs",
    "material-css",
    "angular-material",
    "jquery",
    "jquery-ui",
    "bootstarp3-4",
  ]
  React = [
    "jquery",
    "jquery-ui",
    "bootstarp3-4",
    "react-hooks",
    "redux",
    "material-ui",
  ]
  Node = [
    "sequelize",
    "jwt",
    "passport",
    "mvc",
  ]
  Csharp = [
    ".net",
    ".net core",
    "webapi",
    "mvc",
    "entity-framework",
    "SignalR",
  ]
  CodeSoftware = ["visual studio code", "visual community"]
  Databases = ["mongodb", "mysql"]
  constructor() {

  }

  ngOnInit(): void {

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

}
