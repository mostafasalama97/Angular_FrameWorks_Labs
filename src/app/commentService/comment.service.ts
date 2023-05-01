import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IComment } from '../postsInterface/post-interface/post-interface.component';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  _url:string | undefined;

  constructor(private http:HttpClient) { }

  getCommentsApi(postId:any):Observable<IComment[]> {
    this._url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    // this._url = 'https://jsonplaceholder.typicode.com/posts/1/comments';

    return this.http.get<IComment[]>(this._url).pipe(
      catchError((err)=>
      {
        return throwError(() => err.message || "Server Error");
      })
    );
  }
}
