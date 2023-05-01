import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/commentService/comment.service';
import { IComment } from 'src/app/postsInterface/post-interface/post-interface.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() postId: any;
  commentsList: IComment[] = [];
  ErrMsg:any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postCommentsService:CommentService) { }

  ngOnInit(): void {

    this.postCommentsService.getCommentsApi(this.postId).subscribe(
      {
        next : data => this.commentsList = data,
        error: error=> this.ErrMsg = error
      }
    );
  }
}
