import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';

import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  arrUsers: User[];
  userForm: FormGroup;
  totalUsers = 0;
  selectedUserId = '';
  isEdit = false;
  txtFormLegend = ' Add Worker';

  constructor(
    private userService: UserService,
    private fbuilder: FormBuilder,
  ) {
    this.userForm = this.fbuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(): void {
    this.userService.getUsers()
    .subscribe(users => {
      this.arrUsers = users;
      this.totalUsers = this.arrUsers.length;
    });
  }

  addUser(dataform): void{
    dataform.roles = {admin: false};
    this.userService.postUser( dataform  as User)
    .subscribe(datauser => {
      this.arrUsers.push(datauser);
      this.totalUsers = this.arrUsers.length;
      this.userForm.reset();
    });
  }

  editUser(dataUser): void {
    this.isEdit = true;
    this.txtFormLegend = 'Update Worker';
    this.selectedUserId = dataUser.id;
    this.userForm.patchValue({ email: dataUser.email, password: dataUser.password });
  }

  saveUser(dataform): void {
    this.isEdit = false;
    this.userService.updateUser(this.selectedUserId, dataform)
    .subscribe(resp => {
      this.userForm.reset();
      this.selectedUserId = '';
      this.listUsers();
    });
  }

  cancel(): void {
    this.isEdit = false;
    this.selectedUserId = '';
    this.txtFormLegend = ' Add Worker';
    this.userForm.reset();
  }

  clear(): void{
    this.userForm.reset({emitEvent: true});
  }

  deleteUser(user: User): void{
    this.userService.deleteUser(user).subscribe(resp => {
      this.arrUsers = this.arrUsers.filter(data => data !== user);
      this.totalUsers = this.arrUsers.length;
    });
  }
}
