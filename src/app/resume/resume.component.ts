import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  ProgramingLanguages = [
    "assets/ProgramingLanguages/javascript-original.svg",
    "assets/ProgramingLanguages/typescript-original.svg",
    "assets/ProgramingLanguages/css3-original.svg",
    "assets/ProgramingLanguages/html5-original.svg",
    "assets/ProgramingLanguages/nodejs-original.svg",
    "assets/ProgramingLanguages/csharp-original.svg",
    "assets/ProgramingLanguages/linq.png",
    "assets/ProgramingLanguages/sql.jpg",
    "assets/ProgramingLanguages/xml.png",
  ]
  Systems = [
    "assets/Systems/android.png",
    "assets/Systems/ios.png",
    "assets/Systems/linux.png",
    "assets/Systems/osx.png",
    "assets/Systems/windows.png",
  ]
  angular9 = [
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
  node = [
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
