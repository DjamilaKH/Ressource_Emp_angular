import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(nom: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        nom,
        password,
      },
      httpOptions
    );
  }

  register(nom: string, email: string, password: string,role:string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        nom,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}