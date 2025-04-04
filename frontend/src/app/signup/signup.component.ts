
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignup(): void {
    this.authService.signup(this.name, this.email, this.password).subscribe({
      next: (response: any) => {
        console.log('Signup successful:', response);
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error('Signup failed:', err);
      }
    });
  }
}

