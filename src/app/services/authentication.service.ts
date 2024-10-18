import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  //token - lsuegskxu
  getToken(): string {
    return localStorage.getItem("lsuegskxu") ?? '';
  }

  setToken(token: string): void {
    localStorage.setItem('lsuegskxu"', token)
  }

  isLoggedIn(): boolean {
    return Boolean(this.getToken());
  }
}
