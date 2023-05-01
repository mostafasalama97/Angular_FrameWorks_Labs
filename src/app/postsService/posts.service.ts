import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IPost , IComment } from '../postsInterface/post-interface/post-interface.component';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  _url:string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getPostsApi():Observable<IPost[]>{
    return this.http.get<IPost[]>(this._url).pipe(
      catchError((err)=>
      {
        return throwError(() => err.message||"Server Error");
      })
    );
  }
}
