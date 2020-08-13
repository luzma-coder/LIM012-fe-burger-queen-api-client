import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/interfaces/user';
// import { User } from './../../../interfaces/user, raiz del proyecto';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  arrUsers: User[];
  userForm: FormGroup;
  constructor(
    private userService: UserService,
    private fbuilder: FormBuilder,
  ) {
    this.userForm = this.fbuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['',  Validators.required],
    });
   }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.arrUsers = users);
  }

  addUser(dataform): void{
    dataform.roles = {admin: false};
    console.log(dataform);
    this.userService.postUser( dataform  as User)
    .subscribe(datauser => {
      this.arrUsers.push(datauser);
    });
  }

  updateUser(user: User): void{

  }

  deleteUser(user: User): void{
    this.arrUsers = this.arrUsers.filter(data => data !== user);
    this.userService.deleteUser(user).subscribe();
  }

  cancel(): void{

  }
}
