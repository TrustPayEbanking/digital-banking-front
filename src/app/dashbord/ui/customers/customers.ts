import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { CustomerService } from '../../../services/customer';
import { Customer } from '../../../model/Customer.model';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './customers.html',
  styleUrls: ['./customers.css']
})
export class Customers implements OnInit {

  customers!: Observable<Customer[]>;
  formGroup!: FormGroup;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      keyword: ['']
    });

    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customers = this.customerService.getCustomer();
  }

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id);
    this.loadCustomers();
  }
}
