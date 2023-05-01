import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/userSercice/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  usersList: any[] = [];
  ErrMsg:any;

  constructor(private userService:UserService) {}

  ngOnInit(): void {
    this.userService.getUsersApi().subscribe({
      next:data=>this.usersList=data,
      error:error=>this.ErrMsg=error
    });
  }
}
