import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  totUsers = [
    {email: 'email1@nuevo.com', password: '11111'},
    {email: 'email2@nuevo.com', password: '21111'},
    {email: 'email3@nuevo.com', password: '31111'},
    {email: 'email4@nuevo.com', password: '41111'},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  updateUser(): void{

  }

  deleteUser(): void{

  }
}
