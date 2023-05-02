import { Component } from '@angular/core';
import { Registeration } from 'src/app/registerClass';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
aboutUs = ['facebook','twitter','instagram'];
userRegisteration = new Registeration();
  userService: any;
onSubmit(): void {
  this.userService.register(this.user).subscribe(() => {
    console.log('User registered successfully.');
  }, (error: any) => {
    console.error('Error while registering user:', error);
  });
}
  user(user: any) {
    throw new Error('Method not implemented.');
  }
}
