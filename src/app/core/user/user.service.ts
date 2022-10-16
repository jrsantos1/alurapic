import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import jwt_decode, {JwtPayload} from 'jwt-decode'
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null!);

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();}

  setToken(token: any){
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    console.log(token)
    const user = jwt_decode(token!) as User;
    console.log(user);
    this.userSubject.next(user);
}
}
