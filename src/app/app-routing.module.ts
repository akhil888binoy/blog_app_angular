import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './admin/dasboard/dasboard.component';
import { PostsComponent } from './admin/dasboard/posts/posts.component';
import { HomeComponent } from './admin/home/home.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent,
    children:[
      {path: 'dasboard', component: DasboardComponent},
      {path: 'post', component: PostsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
