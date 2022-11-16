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
    if(!form.invalid){
      this.ps.addPost(form.value.title, form.value.content, form.value.dateTime);
      form.resetForm();
    }else{
      return
    }

  }

}
