import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  active = 'top';
  currentUserEmail = localStorage.getItem('currentUserEmail');
  currentUserAdmin = localStorage.getItem('currentUserAdmin');

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('email logueado', this.currentUserEmail);
    console.log('admin ', this.currentUserAdmin);
  }

  navigateToOrders(): void {
    this.router.navigate(['/navigation/order']);
  }
  navigateToPendings(): void {
    this.router.navigate(['/navigation/pendings']);
  }
  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
  navigateToUsers(): void {
    this.router.navigate(['/navigation/user']);
  }
  navigateToProducts(): void {
    this.router.navigate(['/navigation/products']);
  }

  navigateToKitchen(): void{
    this.router.navigate(['/navigation/kitchen']);
  }
}

