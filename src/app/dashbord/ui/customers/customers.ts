import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../services/customer';
import {catchError, Observable, throwError} from 'rxjs';
import {Customer} from '../../../model/Customer.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers implements OnInit{
  customers! : Observable<Array<Customer>>;
  erroMessage! : string;
  formGroup! : FormGroup;
  constructor(private customerservice:CustomerService,private fb : FormBuilder) {
  }
  ngOnInit() {
    this.formGroup=this.fb.group({
      keyword : this.fb.control("")
    })
    this.customers=this.customerservice.getCustomer().pipe(
      catchError(err => {
        this.erroMessage=err.message;
       return  throwError(err);
      }),
    );
  }
}
