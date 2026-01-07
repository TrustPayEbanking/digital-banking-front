import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BankAccount} from '../model/Account.model';

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
  public getOperation():Observable<number>{
    return this.http.get<number>("http://localhost:8089/operation/count")
  }
  public getSavingAccount():Observable<Array<BankAccount>>{
     return this.http.get<Array<BankAccount>>("http://localhost:8089/bankaccount");
  }
}
