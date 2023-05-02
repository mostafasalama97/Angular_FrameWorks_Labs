import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterationUserService {
  private baseUrl = 'http://localhost:3000/users';  // suggest that i have a server
  constructor(private http: HttpClient) { }
  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, user);
  }
}
