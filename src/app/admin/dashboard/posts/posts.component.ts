import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from './postlist/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  constructor(private ps:PostsService) { }

  ngOnInit(): void {
  }
  onPostData(form: NgForm){
      this.ps.addPost(form.value.title, form.value.content, form.value.dateTime);
    }

}
