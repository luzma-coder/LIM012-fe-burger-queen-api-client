import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/interfaces/user';
// import { User } from './../../../interfaces/user, raiz del proyecto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  arrUsers: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.arrUsers = users);
  }

  addUser(email: string, password: string): void{
    email = email.trim();
    password = password.trim();
    const objUser = {
      email,
      password,
      roles: { admin: false}
    };
    if (!email) { return; }
    this.userService.postUser( objUser  as User)
      .subscribe(datauser => {
        this.arrUsers.push(datauser);
      });
  }

  updateUser(user: User): void{

  }

  deleteUser(user: User): void{
    this.arrUsers = this.arrUsers.filter(data => data !== user);
    this.userService.deleteUser(user);
  }

  cancel(): void{

  }
}
