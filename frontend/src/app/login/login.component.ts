import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';     
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  onLogin():void {
   
    console.log('Login clicked:', this.email, this.password); 

    this.authService.login(this.email, this.password); 
    alert(`Logging in with ${this.email}`);
    this.router.navigate(['/employees']);
  }
}
