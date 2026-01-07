import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {BankAccount} from '../../../model/Account.model';
import {Bankaccount} from '../../../services/bankaccount';

@Component({
  selector: 'app-savingaccount',
  standalone: false,
  templateUrl: './savingaccount.html',
  styleUrl: './savingaccount.css',
})
export class Savingaccount implements OnInit{
   account! :Observable<Array<BankAccount>>
  errorMessage! :String;
  totalBalance = 0;
  totalCount = 0;
   constructor(private bankaccountservice:Bankaccount) {
   }
   ngOnInit() {
     this.account=this.bankaccountservice.getSavingAccount().pipe(
       catchError(err => {
         this.errorMessage=err.message;
         return throwError(err);
       })
     );
     this.account.subscribe(accounts => {
       this.totalCount = accounts.length;
       this.totalBalance = accounts.reduce(
         (sum, a) => sum + (a.balance ?? 0),
         0
       );
     });

   }
}
