import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { LoginRequest } from '../model/login-form.model';
import { AuthResponse } from '../model/auth-response.model';
import { RegisterRequest } from '../model/register-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth';
  private tokenKey = 'auth-token';

  constructor(private http: HttpClient) { }

  login(request: LoginRequest): Observable<AuthResponse> {
    const loginUrl = `${this.apiUrl}/login`;
    return this.http.post<AuthResponse>(loginUrl, request).pipe(
      tap((authResponse: AuthResponse) => {
        localStorage.setItem(this.tokenKey, authResponse.token);
      }),
      catchError((error) => {
        // Agregar manejo de errores aquí
        console.error('Error durante el inicio de sesión:', error);
        return throwError(error);
      })
    );
  }

  
  register(request: RegisterRequest): Observable<AuthResponse> {
    const registerUrl = `${this.apiUrl}/register`;
    return this.http.post<AuthResponse>(registerUrl, request).pipe(
      tap((authResponse: AuthResponse) => {
        localStorage.setItem(this.tokenKey, authResponse.token);
      })
    );
  }

  getToken(): string {
    // Use el operador de coalescencia nula para asignar un valor predeterminado
    return localStorage.getItem(this.tokenKey) ?? '';
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}

