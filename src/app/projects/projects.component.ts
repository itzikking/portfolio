import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: "Snake",
      description: "Snake Game",
      href: "https://github.com/itzikking/SnakeGame",
      imgFront: "https://media2.giphy.com/media/U2BUZ3yucHaolinw4m/giphy.gif",
      imgBack: "https://media2.giphy.com/media/U2BUZ3yucHaolinw4m/giphy.gif"
    },
    {
      name: "M-Market",
      description: "Super market online",
      href: "https://m-market-client.herokuapp.com/",
      imgFront: "../../assets/projects/m-market/user.png",
      imgBack: "../../assets/projects/m-market/admin.png"
    },
    {
      name: "NETMOVIES",
      description: "Movies trailer",
      href: "https://net-movies-client.herokuapp.com/",
      imgFront: "../../assets/projects/net-movies/netmovies-512x512.png",
      imgBack: "../../assets/projects/net-movies/movies.png"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
