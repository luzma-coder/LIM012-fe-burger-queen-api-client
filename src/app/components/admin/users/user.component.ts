import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/interfaces/user';
// import { User } from './../../../interfaces/user, raiz del proyecto';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { ɵDomAdapter } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  arrUsers: User[];
  userForm: FormGroup;
  selectedUserId = '';
  isEdit = false;

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
    this.userService.postUser( dataform  as User)
    .subscribe(datauser => {
      this.arrUsers.push(datauser);
      this.userForm.reset();
    });
  }

  editUser(dataUser): void{
    this.isEdit = true;
    this.selectedUserId = dataUser.id;
    this.userForm.patchValue({email: dataUser.email, password: dataUser.password});
  }

  saveUser(dataform): void{
    this.isEdit = false;
    this.userService.updateUser(this.selectedUserId, dataform)
    .subscribe(resp => {
      this.userForm.reset();
      this.selectedUserId = '';
    });
  }

  cancel(): void{
    this.isEdit = false;
    this.selectedUserId = '';
    this.userForm.reset();
  }

  deleteUser(user: User): void{
    this.userService.deleteUser(user).subscribe(resp => {
      this.arrUsers = this.arrUsers.filter(data => data !== user);
    });
  }
}
