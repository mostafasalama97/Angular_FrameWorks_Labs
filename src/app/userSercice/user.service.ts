import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUser } from '../user-interface/user-interface.component.spec';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  @Injectable({
    providedIn: 'root'
  })
    _url:string = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http:HttpClient) { }

    getUsersApi():Observable<IUser[]>{
      return this.http.get<IUser[]>(this._url).pipe(
        catchError((err)=>
        {
          return throwError(() => err.message||"Server Error");
        })
      );

    }
  }
