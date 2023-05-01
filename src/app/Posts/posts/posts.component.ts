import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/postsService/posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  postsList: any[] = [];
  ErrMsg:any;
  commentsList: any[] = [];

  constructor(private postService:PostsService, private router:Router, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.postService.getPostsApi().subscribe({
      next:data=>this.postsList=data,
      error:error=>this.ErrMsg=error
    });
  }

  goToComments(postId:number){
    this.router.navigate(['/posts', postId]);
  }
}
