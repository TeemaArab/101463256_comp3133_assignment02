import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.backendUrl}/graphql`;
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

