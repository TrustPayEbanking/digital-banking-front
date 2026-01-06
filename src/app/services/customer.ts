import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/Customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http:HttpClient) {

  }
  public getCustomer():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>("http://localhost:8089/customers")
  }
  public getCountCoutomer():Observable<number>{
    let response =this.http.get<number>("http://localhost:8089/customer/count")
    return response
  }
}
