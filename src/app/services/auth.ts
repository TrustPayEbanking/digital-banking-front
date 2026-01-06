import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  isAuthenticated : boolean=false;
  roles :any;
  username :any;
  accessToken! :string;
  constructor(private http:HttpClient) {
  }
  public login(username :string,password:string){
    let params=new HttpParams().set("username",username).set("password",password);
    let options={
      headers : new HttpHeaders().set("Application","x-www-form-urlencoded")
    }
     return this.http.post("http://localhost:8089/auth/login",params,options)
  }

  loadProfile(value: any) {
    this.isAuthenticated=true;
     let jwtToken=value['token'];
     this.accessToken=jwtToken;
     let jwtdecoer:any=jwtDecode(this.accessToken);
     this.username=jwtdecoer.sub;
     this.roles=jwtdecoer.scope;
  }
}
