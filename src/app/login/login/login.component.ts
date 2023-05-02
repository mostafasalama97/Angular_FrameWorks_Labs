import { Component } from '@angular/core';
import { AuthService } from 'src/app/AuthService/auth-login.service';
import { LoginUser } from 'src/app/loginClass';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
// userLogin = new LoginUser("mostafa@gmail.com","123",new Date(2020, 9, 1));
userLogin = new LoginUser();
message:string = '';
onSubmit()
  {
    //call serveice
    console.log(this.userLogin);
  }
  constructor(private authService: AuthService){}
  login() {
    this.message = this.authService.login(this.userLogin.email, this.userLogin.password);
  }
}
