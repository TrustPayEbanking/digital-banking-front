import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../model/Customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  private customers: Customer[] = [
    { id: 1, name: 'Oussama Hamdane', email: 'oussama@mail.com' },
    { id: 2, name: 'Sara Benali', email: 'sara@mail.com' },
    { id: 3, name: 'Yassine El Amrani', email: 'yassine@mail.com' },
    { id: 4, name: 'Imane Zahraoui', email: 'imane@mail.com' }
  ];

  getCustomer(): Observable<Customer[]> {
    return of(this.customers);
  }

  deleteCustomer(id: number): void {
    this.customers = this.customers.filter(c => c.id !== id);
  }
}
