import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly USER_CREDENTIALS = {
    email: 'misVentas@hotmail.com',
    password: '1234'
  };

  constructor() { }

  authenticate(email: string, password: string): boolean {
    return email === AuthService.USER_CREDENTIALS.email &&
           password === AuthService.USER_CREDENTIALS.password;
  }
}
