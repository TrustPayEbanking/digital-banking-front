import {AfterViewInit, Component} from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-index',
  standalone: false,
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index implements AfterViewInit{
  chart!: Chart;

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
