import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(username: string, password: string): string {
    const usersJson = localStorage.getItem('users');
    if (usersJson !== null) {
      const users = JSON.parse(usersJson);
      const user = users.find((u: { username: string; password: string }) => u.username === username && u.password === password);
      if (user) {
        return `Welcome ${username}!`;
      }
    }
    return 'Invalid username or password';
  }
}

