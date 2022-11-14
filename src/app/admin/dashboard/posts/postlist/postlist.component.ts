import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.sass']
})
export class PostlistComponent implements OnInit {
  posts=[
    {title: 'Angular Blog by Akhil', content:'Blog app for writing blog'},
    {title: 'Angular 14Blog by Akhil', content:'Blog app 14 for writing blog'},
    {title: 'Angular Blog by Akhil from scratch', content:'Blog app from scratch for writing blog'},
    {title: 'Angular Blog by Akhil MEAN stack', content:'Blog app for writing blog MEAN stack'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
