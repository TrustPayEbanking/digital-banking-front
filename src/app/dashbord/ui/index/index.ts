import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {Auth} from '../../../services/auth';
import {catchError, Observable, throwError} from 'rxjs';
import {CustomerService} from '../../../services/customer';
import {Customer} from '../../../model/Customer.model';
import {Bankaccount} from '../../../services/bankaccount';
Chart.register(...registerables);

@Component({
  selector: 'app-index',
  standalone: false,
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index implements AfterViewInit,OnInit{
  chart!: Chart;
  Customerslist! :Observable<Array<Customer>>;
  countCustomer! : Observable<number>;
  countbankaccount! : Observable<number>;
  amount! : Observable<number>;
  operation! :Observable<number>
  errorMessage!:string
  errorMessageCount!:string

  constructor(public services :Auth,private customerservices:CustomerService,private accountbankservice:Bankaccount) {
   }
   ngOnInit() {
    this.countCustomer=this.customerservices.getCountCoutomer().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
    this.Customerslist=this.customerservices.getCustomer().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
    console.log(this.Customerslist)
    this.countbankaccount=this.accountbankservice.getCountAccount().pipe(
      catchError(err => {
        this.errorMessageCount=err.message;
        return throwError(err);
      })
    )
     this.amount=this.accountbankservice.getAmount().pipe(
       catchError(err => {
         this.errorMessageCount=err.message;
         return throwError(err);
       })
     )
     this.operation=this.accountbankservice.getOperation().pipe(
       catchError(err => {
         this.errorMessageCount=err.message;
         return throwError(err);
       })
     )
   }

  ngAfterViewInit(): void {
    const canvas = document.getElementById('chart') as HTMLCanvasElement;
    this.chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar','Apt','May','Juin','July','Sep','Oct','Nov','Dec'],
        datasets: [{
          label: 'Transactions',
          data: [100, 200, 150, 90, 80, 150, 23, 150, 45, 78, 98, 14],
          backgroundColor: '#1E3231',
          borderColor: '#1E3231',
          borderWidth: 3,
          hoverBackgroundColor: '#1d4ed8'
        },
          {
            label: 'Transactions',
            data: [50, 230, 50, 190, 40, 20, 123, 100, 35, 68, 108, 14],
            backgroundColor: 'gray',
            borderColor: '#272727',
            borderWidth: 3,
            hoverBackgroundColor: '#1d4ed8'
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            },
            beginAtZero: true
          }
        }
      }
    });
  }
}
