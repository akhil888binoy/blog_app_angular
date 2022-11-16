import { Injectable } from '@angular/core';
import { post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts:post[] =[];

  constructor() { }
  addPost(title: string, content: string, dateTime: any){
    const post: post={title: title, content: content, dateTime: new Date() };
    this.posts.push(post)
  }
  getAll(){
    return this.posts;
  }
}
