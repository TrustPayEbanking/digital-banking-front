import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Bankaccount {
   constructor(private http:HttpClient) {
   }
   public getCountAccount():Observable<number>{
     return this.http.get<number>("http://localhost:8089/bankaccount/count")
   }
  public getAmount():Observable<number>{
    return this.http.get<number>("http://localhost:8089/bankaccount/totaloperation")
  }
}
