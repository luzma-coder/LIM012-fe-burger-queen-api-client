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

  // leer un usuario

  // (): void {

//   this.userService.getUser(email)
//   .subscribe((data) => {
//     if (data.roles.admin){
//       this.router.navigate(['/navigation/user']);
//     } else {
//       this.router.navigate(['/navigation/order']);
//     }
//   });
//   ,  (error: HttpErrorResponse) => {
//     alert('email y password son necesarios');
//     console.log(error.status);

// }
// }

//   ler todos

  updateUser(): void{

  }

  deleteUser(): void{

  }
}
