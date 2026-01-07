import {Customer} from './Customer.model';


export interface BankAccount {
  id: string;
  balance: number;
  interestRate: number;
  type: 'SA' | 'CA'; // SA = Savings Account, CA = Current Account
  status: string | null;
  createdAt: string | null;
  customer: Customer;
}
