import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    { name: "Network-Scanner", description: "The project chack if ping is ok or not.", href: "https://networkscanner.herokuapp.com/" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
