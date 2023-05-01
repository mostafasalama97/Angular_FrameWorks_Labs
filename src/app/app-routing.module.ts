import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { UserComponent } from './User/user/user.component';
import { PostsComponent } from './Posts/posts/posts.component';
import { ProductComponenetComponent } from './product/product-componenet/product-componenet.component';
import { ErrorComponent } from './PageNotFound/error/error.component';
import { CommentComponent } from './comment/comment/comment.component';
const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'Home', component:HomeComponent },
  { path: 'User', component: UserComponent },
  { path: 'Product', component: ProductComponenetComponent },
  { path: 'Posts', component: PostsComponent },
  {
    path:'posts/:id',
    component:HomeComponent,
    children:[
      {path:'comments', component:CommentComponent}
    ]
  },
  { path: "**" ,component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
