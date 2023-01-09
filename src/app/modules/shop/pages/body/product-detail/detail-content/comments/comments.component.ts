import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  protected comments = [
    {
      id: 1, userName: "User Name1", content: "Lorem ipsum dolor sit amet consectetur, " +
        "adipisicing elit. Maxime fugit pariatur nesciunt odio magni recusandae libero sit, voluptatibus delenitiut."
    },
    {
      id: 2, userName: "User Name2", content: "Lorem ipsum dolor sit amet consectetur, " +
        "adipisicing elit. Maxime fugit pariatur nesciunt odio magni recusandae libero sit, voluptatibus delenitiut."
    },
    {
      id: 3, userName: "User Name3", content: "Lorem ipsum dolor sit amet consectetur, " +
        "adipisicing elit. Maxime fugit pariatur nesciunt odio magni recusandae libero sit, voluptatibus delenitiut."
    },
    {
      id: 4, userName: "User Name4", content: "Lorem ipsum dolor sit amet consectetur, " +
        "adipisicing elit. Maxime fugit pariatur nesciunt odio magni recusandae libero sit, voluptatibus delenitiut."
    },
    {
      id: 5, userName: "User Name5", content: "Lorem ipsum dolor sit amet consectetur, " +
        "adipisicing elit. Maxime fugit pariatur nesciunt odio magni recusandae libero sit, voluptatibus delenitiut."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
