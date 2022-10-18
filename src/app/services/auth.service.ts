import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Login : boolean = false;

  login(){
    this.Login = true;
  }

  logout(){
    this.Login = false;
  }

  autenticado(){
    return this.Login;
  }
  constructor() { }
}
