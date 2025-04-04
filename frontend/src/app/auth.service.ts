import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/graphql';
  private isLoggedIn = false;
  private userEmail = '';

  constructor(private http: HttpClient) {}

  signup(username: string, email: string, password: string): Observable<any> {
    const query = `
      mutation {
        signup(username: "${username}", email: "${email}", password: "${password}") {
          id
          email
        }
      }
    `;
    return this.http.post<any>(this.apiUrl, { query });
  }

  login(email: string, password: string): void{
    this.isLoggedIn = true;
    this.userEmail = email;
    console.log('AuthService: User logged in:', email);
   
   
  }

  logout() {
    this.isLoggedIn = false;
    this.userEmail = '';
    console.log('AuthService: User logged out')
    
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn  ;
  }

  getUserEmail(): string {
    return this.userEmail ;
  }
}

