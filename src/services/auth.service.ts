import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Token } from '@angular/compiler';
import { TokenType } from '@angular/compiler/public_api';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt'
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string ="https://localhost:44337/api/";
  private userPayLoad :any;
  
  constructor(private http: HttpClient, private router: Router) { 
    this.userPayLoad = this.decodeToken();
  }
  
  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}User/registeruser`,userObj);
  }
  signIn(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}User/authenticate`,loginObj);
  }
  //this LocObj define from APILocationController
  addLocation(locObj:any){
    return this.http.post<any>(`${this.baseUrl}Location/RegisterLocation`,locObj);
  //   console.log('addLocation called with locObj:', locObj);
  // return this.http.post<any>(`${this.baseUrl}RegisterLocation`, locObj)
  //   .pipe(
  //     tap(res => console.log('addLocation response:', res)),
  //     catchError(error => {
  //       console.error('addLocation error:', error);
  //       return throwError(error);
  //     })
  //   );
  }
  getLocations(locObj:any){
    return this.http.get<any>(`${this.baseUrl}Location`,locObj);
  }
  signOut(){
    localStorage.clear();
    this.router.navigate(['signin']);
  }

  storeToken(TokenValue:string){
    localStorage.setItem('token', TokenValue)
    }
    getToken(){
      return localStorage.getItem('token')
    }
    isLoggedIn():boolean{
      return !!localStorage.getItem('token')
    }
    decodeToken(){
      const jwtHelper = new JwtHelperService();
      const token = this.getToken()!;
      return jwtHelper.decodeToken(token);
    }
    getfullNameFromToken(){
      if (this.userPayLoad)
      return this.userPayLoad.unique_name;
    }
    getRoleFromToken(){
      if (this.userPayLoad)
      return this.userPayLoad.role;
    }
  }